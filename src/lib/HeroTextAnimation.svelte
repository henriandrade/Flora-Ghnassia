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
        amount: 0.6,
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
          amount: 0.6,
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
  });
</script>
