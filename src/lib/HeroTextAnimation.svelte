<script lang="ts">
  import SplitType from "split-type";
  import gsap from "gsap";
  import { onMount } from "svelte";

  onMount(() => {
    // Select the spans
    const floraSpan = document.querySelector(".hero-flora") as HTMLElement;
    const ghnassiaSpan = document.querySelector(
      ".hero-ghnassia"
    ) as HTMLElement;

    // Apply SplitType to both spans
    const floraSplit = new SplitType(floraSpan, { types: "chars" });
    const ghnassiaSplit = new SplitType(ghnassiaSpan, { types: "chars" });

    // Create timeline for animation
    const tl = gsap.timeline();

    // Animate Flora characters
    tl.from(floraSplit.chars, {
      y: "-100%",
      opacity: 0,
      duration: 5,
      ease: "power4.out",
      stagger: {
        amount: 0.8,
        ease: "power2.inOut",
      },
    });

    // Animate Ghnassia characters
    tl.from(
      ghnassiaSplit.chars,
      {
        y: "-100%",
        opacity: 0,
        duration: 5,
        ease: "power4.out",
        stagger: {
          amount: 0.8,
          ease: "power1.out",
        },
      },
      "-=85%"
    ); // Start slightly before the Flora animation completes

    tl.eventCallback("onComplete", () => {
      // Add hover interaction for each character
      const allChars = [...floraSplit.chars!, ...ghnassiaSplit.chars!];

      allChars.forEach((char) => {
        char.style.transition = "transform 0.4s ease";

        // Add mouse enter event
        char.addEventListener("mouseenter", () => {
          gsap.to(char, {
            y: "-50%",
            duration: 0.4,
            ease: "power3.inOut",
          });
        });

        // Create a function to handle the animation reset
        const resetCharPosition = () => {
          gsap.to(char, {
            y: "0%",
            duration: 0.4,
            ease: "power2.out",
          });
        };

        // Add mouse leave event
        char.addEventListener("mouseleave", resetCharPosition);
      });
    });

    const textElementsToAnimate = document.querySelectorAll(
      "[animate-text-duration]"
    ) as NodeListOf<HTMLElement>;

    textElementsToAnimate.forEach((textElement) => {
      const duration = parseFloat(
        textElement.getAttribute("animate-text-duration") || "1"
      );

      // Check if there's a delay attribute
      const delay = parseFloat(
        textElement.getAttribute("animate-delay") || "0"
      );

      // Split text by lines
      const splitText = new SplitType(textElement, { types: "lines" });

      // Add overflow hidden to each line element
      if (splitText.lines) {
        // Set overflow hidden on all line elements
        splitText.lines.forEach((line) => {
          line.style.overflow = "hidden";

          // Create a container for the content to animate
          const contentWrapper = document.createElement("div");
          contentWrapper.innerHTML = line.innerHTML;
          contentWrapper.style.display = "block";

          // Clear original content and append the wrapper
          line.innerHTML = "";
          line.appendChild(contentWrapper);
        });

        // Animate all content wrappers with staggered timing
        gsap.fromTo(
          splitText.lines.map((line) => line.firstChild),
          { y: "150%" },
          {
            y: "0%",
            duration: duration,
            delay: delay,
            stagger: 0.1, // Add stagger effect between lines
            ease: "power3.out",
          }
        );
      }
    });
  });
</script>
