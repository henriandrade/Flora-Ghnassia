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
    wordClone.style.transform = "translateY(120%)";
    wordClone.classList.add("clone");
    menuItem.appendChild(wordClone);

    // Create underline element
    const underline = document.createElement("div");
    underline.style.position = "absolute";
    underline.style.marginTop = "1.5rem";
    underline.style.width = "100%";
    underline.style.height = "0.15rem";
    underline.style.backgroundColor = "white";
    underline.style.transformOrigin = "left";
    underline.style.transform = "scaleX(0)";
    menuLink.style.position = "relative";
    menuItem.appendChild(underline);

    // Get all chars from original and clone
    const originalChars = menuLink.querySelectorAll(".char");
    const cloneChars = wordClone.querySelectorAll(".char");

    // Setup hover animations
    menuLink.addEventListener("mouseenter", () => {
      gsap.to(underline, {
        scaleX: 1,
        duration: 0.2,
        ease: "power2.out",
      });

      gsap.to(originalChars, {
        yPercent: -120,
        duration: 0.3,
        stagger: 0.01,
        ease: "power2.out",
      });

      gsap.to(cloneChars, {
        yPercent: -120,
        duration: 0.3,
        stagger: 0.01,
        ease: "power2.out",
      });

      // Fire confetti if this is the #fun menu item
      if (menuLink.id === "fun") {
        // Get menu link position relative to viewport
        const rect = menuLink.getBoundingClientRect();
        const x = (rect.left + rect.width * 0.65) / window.innerWidth; // Center horizontally
        const y = (rect.top + rect.height * 0.25) / window.innerHeight; // Center vertically

        confetti({
          particleCount: 100,
          spread: 180,
          origin: { x, y },
          angle: -90, // Point downward
          gravity: 0.5,
          startVelocity: 20,
        });
      }
    });

    menuLink.addEventListener("mouseleave", () => {
      gsap.to(underline, {
        scaleX: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(originalChars, {
        yPercent: 0,
        duration: 0.4,
        stagger: 0.01,
        ease: "power2.out",
      });

      gsap.to(cloneChars, {
        yPercent: 0,
        duration: 0.4,
        stagger: 0.01,
        ease: "power2.out",
      });
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
