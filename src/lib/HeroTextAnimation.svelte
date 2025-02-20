<script lang="ts">
  import SplitType from "split-type";
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  let words: NodeListOf<HTMLElement>;
  let activeWord: number = 0;
  let intervalId: number;
  let wordsContainer = document.createElement("div");
  let wordWidths: number[] = [];
  let wordHeights: number[] = [];
  let intervalDuration: number = 2000;
  let animationDuration: number = 0.5;
  let staggerDuration: number = 0.05;
  let resizeObserver: ResizeObserver;
  let lineContainer: HTMLElement;

  const animateWord = async (index: number): Promise<void> => {
    const word = words[index];
    if (!word) return;

    word.style.display = "flex";

    const text = new SplitType(word, { types: "chars" });
    gsap.set(text.chars, { opacity: 0, y: "2rem", filter: "blur(20px)" });
    await new Promise((resolve) => setTimeout(resolve, 0)); // tick() alternative

    gsap.to(text.chars, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: staggerDuration,
      duration: animationDuration * 0.3,
      onComplete: () => {
        gsap.set(text.chars, { clearProps: "all" });
      },
    });

    for (let div of word.children) {
      (div as HTMLElement).setAttribute(
        "style",
        "display: flex; overflow-visible; position: relative;"
      );
    }

    if (wordsContainer) {
      gsap.to(wordsContainer, {
        width: `calc(${wordWidths[index]}px + 1.15rem)`,
        height: `${wordHeights[index]}px`,
        duration: animationDuration * 0.8,
        ease: "power2.inOut",
      });
    }
  };

  const startWordAnimation = () => {
    intervalId = window.setInterval(async () => {
      words.forEach((word) => {
        word.style.display = "none";
      });

      activeWord = (activeWord + 1) % words.length;
      await animateWord(activeWord);
    }, intervalDuration);
  };

  const updateDimensions = async (): Promise<void> => {
    const measureContainer = document.createElement("div");
    measureContainer.style.position = "absolute";
    measureContainer.style.visibility = "hidden";
    measureContainer.style.display = "flex";
    lineContainer.insertBefore(measureContainer, lineContainer.children[1]);

    // Create clones and measure them
    const clones = Array.from(words).map((word) => {
      const clone = word.cloneNode(true) as HTMLElement;
      clone.style.display = "flex";
      measureContainer.appendChild(clone);
      return clone;
    });

    // Calculate dimensions
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          wordWidths = clones.map(
            (clone) => clone.getBoundingClientRect().width
          );
          wordHeights = clones.map((clone) => clone.offsetHeight);

          // Update container dimensions
          if (wordsContainer) {
            wordsContainer.style.width = `calc(${wordWidths[activeWord]}px + 1.15rem)`;
            wordsContainer.style.height = `${wordHeights[activeWord]}px`;
          }

          // Clean up
          lineContainer.removeChild(measureContainer);
          resolve();
        }, 50);
      });
    });
  };

  const init = async () => {
    words = document.querySelectorAll<HTMLElement>(".animated-word-box");
    lineContainer = words[0].parentElement!;
    for (let word of words) {
      wordsContainer.appendChild(word);
    }
    lineContainer.insertBefore(
      wordsContainer,
      lineContainer.children[1] || null
    );

    if (wordsContainer) {
      wordsContainer.style.marginLeft = "0.25rem";
      wordsContainer.style.display = "flex";

      wordsContainer.addEventListener("pointerenter", () => {
        clearInterval(intervalId);
        intervalDuration = 400;
        animationDuration = 0.3;
        staggerDuration = 0.015;
        document.body.style.cursor = "crosshair";
        startWordAnimation();
      });

      wordsContainer.addEventListener("pointerleave", () => {
        clearInterval(intervalId);
        intervalDuration = 2000;
        animationDuration = 0.5;
        staggerDuration = 0.05;
        document.body.style.cursor = "default";
        startWordAnimation();
      });
    }

    setTimeout(() => {
      updateDimensions().then(() => {
        words.forEach((word) => {
          word.style.display = "none";
        });
        animateWord(activeWord);
        startWordAnimation();
      });
    }, 100);
    resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(lineContainer.parentElement!);
  };

  onMount(() => {
    init();
    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  });
</script>
