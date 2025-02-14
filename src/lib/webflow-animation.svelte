<script lang="ts">
  import { onMount } from "svelte";
  import SplitType from "split-type";
  import gsap from "gsap";
  import { tick } from "svelte";

  let words: NodeListOf<HTMLElement>;
  let activeWord = 0;

  onMount(async () => {
    words = document.querySelectorAll(".animated-word-box");
    console.log(words);

    // Initially hide all words
    words.forEach((word) => {
      word.style.display = "none";
    });

    const animateWord = async (index: number) => {
      const word = words[index];
      if (!word) return;

      // Show the current word
      word.style.display = "flex";

      const text = new SplitType(word, { types: "chars" });
      gsap.set(text.chars, { opacity: 0, y: "2rem", filter: "blur(20px)" }); // Initial state
      await tick();
      return gsap.to(text.chars, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.05,
        duration: 0.5,
        onComplete: () => {
          gsap.set(text.chars, { clearProps: "all" });
        },
      });
    };

    // Initial animation
    await animateWord(activeWord);

    // Set interval for subsequent animations
    const intervalId = setInterval(async () => {
      // Hide the previous word
      words.forEach((word) => {
        word.style.display = "none";
      });

      activeWord = (activeWord + 1) % words.length;
      await animateWord(activeWord);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  });
</script>
