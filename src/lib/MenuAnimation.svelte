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

    const wordClone = menuLink
      .querySelector(".word")!
      .cloneNode(true) as HTMLElement;
    wordClone.style.position = "absolute";
    wordClone.style.transform = "translateY(125%)";
    wordClone.classList.add("clone");
    menuItem.appendChild(wordClone);

    // Get all chars from original and clone
    const originalChars = menuLink.querySelectorAll(".char");
    const cloneChars = wordClone.querySelectorAll(".char");

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
