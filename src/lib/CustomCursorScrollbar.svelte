<script lang="ts">
  import { onMount } from "svelte";
  import { lenisController } from "../Lenis";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  let scrollbar: HTMLElement;

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

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

  // Function to refresh ScrollTrigger and update scrollbar
  function refreshScrollTrigger() {
    if ($lenisController) {
      updateScrollbar($lenisController);
      ScrollTrigger.refresh(true); // true forces a recalculation of all ScrollTriggers
    }
  }

  let scrollbarStyle = `
    background-color: var(--jasmine);
    width: 0.5rem;
    position: fixed;
    inset: 0% 0% 0% auto;
    z-index: 1200;
    cursor: pointer;
    mix-blend-mode: difference;
  `;

  onMount(() => {
    scrollbar = document.querySelector(".custom-scrollbar") as HTMLElement;
    if (scrollbar) {
      scrollbar.style.cssText = scrollbarStyle;
      initScrollbar();

      // Update scrollbar on window resize
      window.addEventListener("resize", refreshScrollTrigger);

      // Create a MutationObserver to detect DOM changes
      const observer = new MutationObserver((mutations) => {
        refreshScrollTrigger();
      });

      // Start observing the document body for DOM changes
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["style", "class"],
      });

      scrollbar.addEventListener("mouseenter", () => {
        scrollbar.style.opacity = "1";
      });

      scrollbar.addEventListener("mouseleave", () => {
        scrollbar.style.opacity = "0.8";
      });

      return () => {
        window.removeEventListener("resize", refreshScrollTrigger);
        observer.disconnect();
      };
    }
  });
</script>
