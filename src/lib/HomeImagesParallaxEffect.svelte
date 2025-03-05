<script lang="ts">
  import { onMount } from "svelte";
  import { lenisController } from "../Lenis";
  import gsap from "gsap";
  import { spring } from "svelte/motion";
  import { writable } from "svelte/store";

  let projectContainers: NodeListOf<HTMLElement>;
  let scrollbar: HTMLElement;

  const velocitySpring = spring(0, {
    stiffness: 0.1,
    damping: 0.5,
  });
  $: document.body.style.setProperty("--scroll-velocity", `${$velocitySpring}`);

  let updateSetted = false;
  $: if ($lenisController && !updateSetted) {
    updateSetted = true;
    $lenisController.on("scroll", (controller) => {
      $velocitySpring = controller.velocity;
      updateScrollbar(controller);
    });
  }

  // Function to update custom scrollbar
  function updateScrollbar(controller: any) {
    if (!scrollbar) return;

    const { progress, limit } = controller;

    // Calculate thumb height based on viewport and content size
    const viewportHeight = window.innerHeight;
    const contentHeight = limit + viewportHeight;
    const thumbHeight = Math.max(
      50,
      (viewportHeight / contentHeight) * viewportHeight
    );

    // Update thumb height
    scrollbar.style.height = `${thumbHeight}px`;

    // Update thumb position
    const maxScrollDistance = viewportHeight - thumbHeight;
    const thumbPosition = progress * maxScrollDistance;
    scrollbar.style.transform = `translateY(${thumbPosition}px)`;
  }

  // Function to initialize custom scrollbar
  function initScrollbar() {
    // Apply styles to the scrollbar
    if (scrollbar) {
      // Keep existing styles
      scrollbar.style.backgroundColor = "var(--jasmine)";
      scrollbar.style.width = "0.5rem";
      scrollbar.style.position = "fixed";
      scrollbar.style.inset = "0% 0% 0% auto";
      scrollbar.style.zIndex = "1200";
      scrollbar.style.cursor = "pointer";
      scrollbar.style.mixBlendMode = "difference";

      // Add hover effect
      scrollbar.addEventListener("mouseenter", () => {
        scrollbar.style.opacity = "1";
      });

      scrollbar.addEventListener("mouseleave", () => {
        scrollbar.style.opacity = "0.8";
      });
    }

    // Hide default scrollbar
    document.documentElement.style.scrollbarWidth = "none"; // Firefox
    // @ts-ignore
    document.documentElement.style.msOverflowStyle = "none"; // IE/Edge
    document.body.style.overflow = "auto";
    document.body.style.overflowY = "scroll";

    // For WebKit browsers (Chrome, Safari)
    const style = document.createElement("style");
    style.textContent = `
      ::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);

    // Initial update
    if ($lenisController) {
      updateScrollbar($lenisController);
    }
  }

  let setted = writable(false);
  const setupParallax = () => {
    if ($setted) return;
    $setted = true;
    document.body.style.setProperty("--scroll-velocity", "0");
    projectContainers = document.querySelectorAll(".home-project-instance");

    for (let container of projectContainers) {
      const rotationTransform = window.getComputedStyle(container).transform;

      // Remove the container transform
      container.style.transform = "none";

      const image = container.querySelector(
        ".home-project-image.original"
      ) as HTMLImageElement;
      image.style.zIndex = "200";

      let numberOfCopies = 8;

      // Create a container for the clones
      const clonesContainer = document.createElement("div");
      clonesContainer.classList.add("clones-container");
      clonesContainer.style.zIndex = "0";

      for (let i = 0; i < numberOfCopies; i++) {
        const imgCopy = image.cloneNode(true) as HTMLImageElement;
        imgCopy.classList.remove("original");
        imgCopy.classList.add("clone");
        imgCopy.style.zIndex = "100";
        clonesContainer.appendChild(imgCopy);
      }

      container.children[0].appendChild(clonesContainer);

      const clones: HTMLElement[] = Array.from(
        clonesContainer.querySelectorAll(".home-project-image.clone")
      );

      const applyStyles = (
        element: HTMLElement,
        {
          opacity,
          translate,
          transformIndex,
        }: { opacity: number; translate: number; transformIndex: number }
      ) => {
        element.style.opacity = `${opacity}`;
        const translateX = `-${translate * 1.25 + ((transformIndex * transformIndex) / 2 || 0) * 0.1}rem`;
        const translateY = `${translate * 2}rem`;
        const translateZ = `${translate * -0.05 * transformIndex}rem`;
        const factor = transformIndex;
        const parallaxY = `calc(var(--scroll-velocity)*${factor}*0.05rem)`;

        element.style.transform = `${rotationTransform} translateY(${parallaxY}) translate3d(${translateX}, ${translateY}, ${translateZ})`;
      };

      applyStyles(image, { opacity: 1, translate: 0, transformIndex: 0 });

      for (let [index, img] of clones.reverse().entries()) {
        const opacity = gsap.utils.interpolate(
          0.85,
          0.15,
          index / numberOfCopies
        );
        const translate = gsap.utils.interpolate(
          0.25,
          4,
          index / numberOfCopies
        );
        applyStyles(img, { opacity, translate, transformIndex: index + 1 });
      }
    }
  };

  onMount(() => {
    setupParallax();
    scrollbar = document.querySelector(".custom-scrollbar") as HTMLElement;
    if (scrollbar) {
      initScrollbar();

      // Update scrollbar on window resize
      window.addEventListener("resize", () => {
        if ($lenisController) {
          updateScrollbar($lenisController);
        }
      });
    }
  });
</script>
