<script lang="ts">
  import SplitType from "split-type";
  import gsap from "gsap";
  import { onMount } from "svelte";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  const DURATION = 1.5;
  const STAGGER_EACH = 0.025;
  const HOVERING_DURATION = 0.125;

  // Debounce function to limit how often a function can run
  function debounce(func: Function, wait: number) {
    let timeout: number | null = null;
    return function (...args: any[]) {
      // @ts-ignore
      const context = this;
      clearTimeout(timeout as number);
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait) as unknown as number;
    };
  }

  function setupAnimation() {
    // Store references for cleanup
    let splitInstances: SplitType[] = [];
    let heroObserver: ResizeObserver;
    let resizeObservers: ResizeObserver[] = [];
    // Track processing state for each element being split
    const processingElements = new Map<string, boolean>();

    // Function to initialize hero name animation
    const initHeroNameAnimation = () => {
      const heroId = "hero-animation";
      // Prevent recursive calls during splitting for this specific element
      if (processingElements.get(heroId)) return;
      processingElements.set(heroId, true);

      // Clean up previous instances if they exist
      splitInstances.forEach((instance) => instance.revert());

      // Select the spans
      const floraSpan = document.querySelector(".hero-flora") as HTMLElement;
      const ghnassiaSpan = document.querySelector(
        ".hero-ghnassia"
      ) as HTMLElement;

      if (!floraSpan || !ghnassiaSpan) {
        processingElements.set(heroId, false);
        return;
      }

      // Get the computed style of the floraSpan to extract the initial Y value.
      const floraStyle = window.getComputedStyle(floraSpan);
      const transformValue = floraStyle.transform;

      let translateY = "0px"; // Default value
      if (transformValue !== "none") {
        const matrixValues = transformValue.match(/matrix.*\((.+)\)/);
        if (matrixValues && matrixValues[1]) {
          const values = matrixValues[1].split(", ");
          translateY = values[5] || "0px"; // the 6th value is translateY
        }
      }

      // Apply SplitType to both spans
      const floraSplit = new SplitType(floraSpan, { types: "chars" });
      const ghnassiaSplit = new SplitType(ghnassiaSpan, { types: "chars" });

      // Store instances for cleanup
      splitInstances.push(floraSplit, ghnassiaSplit);

      // Create timeline for animation
      const tl = gsap.timeline({
        paused: true,
      });
      tl.eventCallback("onStart", () => {
        floraSpan.style.transform = "translateY(0)";
        ghnassiaSpan.style.transform = "translateY(0)";
      });

      tl.from(floraSplit.chars || [], {
        y: `${translateY}`,
        duration: DURATION,
        stagger: {
          ease: "power4.out",
          each: STAGGER_EACH,
        },
      });

      tl.from(
        ghnassiaSplit.chars || [],
        {
          y: `${translateY}`,
          duration: DURATION,
          stagger: {
            ease: "power4.out",
            each: STAGGER_EACH,
          },
        },
        "-=95%"
      );

      tl.eventCallback("onComplete", () => {
        // Add hover interaction for each character
        const allChars = [
          ...(floraSplit.chars || []),
          ...(ghnassiaSplit.chars || []),
        ].filter(Boolean);

        if (allChars.length > 0) {
          allChars.forEach((char) => {
            char.style.transition = "transform 0.4s ease";

            // Add mouse enter event
            char.addEventListener("mouseenter", () => {
              gsap.to(char, {
                y: "-1.5rem",
                ease: "power4.out",
                duration: HOVERING_DURATION,
              });
            });

            // Create a function to handle the animation reset
            const resetCharPosition = () => {
              gsap.to(char, {
                y: "0%",
                ease: "power4.in",
                duration: HOVERING_DURATION,
              });
            };

            // Add mouse leave event
            char.addEventListener("mouseleave", resetCharPosition);
          });
        }

        // Reset the flag after animations are complete
        processingElements.set(heroId, false);
      });

      tl.play();

      // If animation doesn't complete for some reason, reset the flag
      setTimeout(() => {
        processingElements.set(heroId, false);
      }, 100);
    };

    // Set up ResizeObserver for hero container with flag check
    const heroContainer = document.querySelector(".home-hero-container");
    if (heroContainer) {
      const heroResizeObserver = new ResizeObserver(
        debounce(() => {
          const heroId = "hero-animation";
          if (!processingElements.get(heroId)) {
            initHeroNameAnimation();
          }
        }, 300)
      );

      heroResizeObserver.observe(heroContainer);
      heroObserver = heroResizeObserver;
    }

    // Handle window resize events with flag check
    const handleResize = debounce(() => {
      const heroId = "hero-animation";
      if (!processingElements.get(heroId)) {
        initHeroNameAnimation();
      }
    }, 300);

    window.addEventListener("resize", handleResize);

    const textElementsToAnimate = document.querySelectorAll(
      "[animate-text-duration]"
    ) as NodeListOf<HTMLElement>;

    // Function to initialize text animation for a single element
    const initTextAnimation = (textElement: HTMLElement) => {
      const elementId =
        textElement.id ||
        `text-element-${Math.random().toString(36).substr(2, 9)}`;
      // Prevent recursive calls during splitting for this specific element
      if (processingElements.get(elementId)) return;
      processingElements.set(elementId, true);

      // Find and revert any existing split instance for this element
      const splitInstance = splitInstances.find((instance) => {
        return instance.lines?.some((line) => line.firstChild === textElement);
      });

      if (splitInstance) {
        splitInstance.revert();
      }

      const duration = parseFloat(
        textElement.getAttribute("animate-text-duration") || "1"
      );

      // Check if there's a delay attribute
      const delay = parseFloat(
        textElement.getAttribute("animate-delay") || "0"
      );

      // Capture the original text content and styling before splitting
      const originalText = textElement.textContent;
      const computedStyle = window.getComputedStyle(textElement);
      const originalLineHeight = computedStyle.lineHeight;
      const originalFontSize = computedStyle.fontSize;

      requestAnimationFrame(() => {
        // Split text by lines
        const splitText = new SplitType(textElement, {
          types: "lines,words",
          lineClass: "split-line",
        });
        splitInstances.push(splitText);

        // Add overflow hidden to each line element
        if (splitText.lines) {
          // Set overflow hidden on all line elements
          splitText.lines.forEach((line) => {
            // Apply critical styles inline to maintain text layout
            line.style.overflowY = "hidden";
            line.style.overflowX = "visible";
            line.style.display = "block";
            line.style.width = "fit-content";
            line.style.whiteSpace = "nowrap";
            line.style.position = "relative";
            line.style.boxSizing = "border-box";

            // Create a container for the content to animate
            const contentWrapper = document.createElement("div");
            contentWrapper.innerHTML = line.innerHTML;
            contentWrapper.style.display = "inline-block";

            // Clear original content and append the wrapper
            line.innerHTML = "";
            line.appendChild(contentWrapper);
          });

          // Animate all content wrappers with staggered timing using ScrollTrigger
          gsap.fromTo(
            splitText.lines.map((line) => line.firstChild),
            { y: "150%" },
            {
              y: "0%",
              duration: duration,
              delay: delay,
              stagger: {
                each: 0.2,
                ease: "power5.in",
              },
              scrollTrigger: {
                trigger: textElement,
                start: "top bottom",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Reset the flag after processing
        setTimeout(() => {
          processingElements.set(elementId, false);
        }, 100);
      });
    };

    // Initialize text animations for all elements
    textElementsToAnimate.forEach((textElement) => {
      // Initialize animation for this element
      textElement.style.position = "relative";

      // Set up ResizeObserver for this element
      const textResizeObserver = new ResizeObserver(
        debounce(() => {
          const elementId =
            textElement.id ||
            `text-element-${Math.random().toString(36).substr(2, 9)}`;
          // Only recalculate if we're not already processing a split for this element
          if (!processingElements.get(elementId)) {
            initTextAnimation(textElement);
          }
        }, 300)
      );

      const documentTextObserver = new ResizeObserver(
        debounce(() => {
          initTextAnimation(textElement);
        }, 300)
      );

      documentTextObserver.observe(document.body);

      textResizeObserver.observe(textElement.parentElement!);
      resizeObservers.push(textResizeObserver);
    });

    // Cleanup function
    return () => {
      // Remove event listeners
      window.removeEventListener("resize", handleResize);

      if (heroObserver) {
        heroObserver.disconnect();
      }

      // Disconnect all observers
      resizeObservers.forEach((observer) => {
        if (observer instanceof ResizeObserver) {
          observer.disconnect();
        }
      });

      // Revert all split instances
      splitInstances.forEach((instance) => instance.revert());

      // Kill all GSAP animations
      gsap.killTweensOf(
        document.querySelectorAll(".hero-flora, .hero-ghnassia")
      );
    };
  }

  let isMounted = false;
  onMount(() => {
    if (!isMounted) {
      setupAnimation();
      isMounted = true;
    }
  });
</script>
