<script lang="ts">
  import { onMount } from "svelte";
  import SplitType from "split-type";
  import gsap from "gsap";

  const setupMenuItem = (menuLink: HTMLElement) => {
    // Split text into characters
    const text = new SplitType(menuLink, { types: "chars,words" });

    const menuItem = menuLink.querySelector(".menu-item")! as HTMLElement;
    menuItem.style.display = "flex";
    menuItem.style.flexDirection = "column";
    menuItem.style.alignItems = "center";
    menuItem.style.justifyContent = "center";
    menuItem.style.overflow = "hidden";
    menuItem.style.height = "2rem";

    // Create clone container
    const cloneContainer = document.createElement("div");
    cloneContainer.classList.add("clone-container");
    cloneContainer.style.position = "absolute";
    cloneContainer.style.transform = "translateY(125%)";
    menuItem.appendChild(cloneContainer);

    // Create original container
    const originalContainer = document.createElement("div");
    originalContainer.classList.add("original-container");
    originalContainer.style.display = "flex";
    menuItem.appendChild(originalContainer);

    // Get all words
    const originalWords = Array.from(
      menuLink.querySelectorAll(".word")
    ) as HTMLElement[];

    // Clone the words and append them to the clone container
    const wordClones = originalWords.map((word) => {
      const wordClone = word.cloneNode(true) as HTMLElement;
      wordClone.classList.add("clone");
      cloneContainer.appendChild(wordClone);
      return wordClone;
    });

    // Preserve original spacing between words
    cloneContainer.style.display = "flex";

    // Add spaces between cloned words
    for (let i = 0; i < wordClones.length - 1; i++) {
      const space = document.createElement("span");
      space.innerHTML = "&nbsp;";
      cloneContainer.insertBefore(space, wordClones[i + 1]);
    }

    // Append the original words to the original container
    // and preserve their original spacing
    originalWords.forEach((originalWord) => {
      originalContainer.appendChild(originalWord);
      // Add a small space after each word except the last one
      if (originalWord !== originalWords[originalWords.length - 1]) {
        const space = document.createElement("span");
        space.innerHTML = "&nbsp;";
        originalContainer.appendChild(space);
      }
    });

    // Get all chars from original and clone
    const originalChars = originalContainer.querySelectorAll(".word .char");
    const cloneChars = cloneContainer.querySelectorAll(".word .char");

    // Create a timeline for animations
    const tl = gsap.timeline({ paused: true });

    // Add animations to the timeline
    tl.to(
      originalChars,
      {
        yPercent: -125,
        duration: 0.8,
        stagger: 0.06,
        ease: "power2.out",
      },
      0
    );

    tl.to(
      cloneChars,
      {
        yPercent: -125,
        duration: 0.8,
        stagger: 0.06,
        ease: "power2.out",
      },
      0
    );

    // Setup hover animations
    menuLink.addEventListener("mouseenter", () => {
      tl.timeScale(1);
      tl.play();
    });
    menuLink.addEventListener("mouseleave", () => {
      tl.timeScale(2);
      tl.reverse();
    });
  };

  const init = () => {
    const menuLink = document.querySelectorAll<HTMLElement>(".menu-link");
    menuLink.forEach((menuLink) => {
      setupMenuItem(menuLink);
    });
  };

  onMount(() => {
    init();
  });
</script>
