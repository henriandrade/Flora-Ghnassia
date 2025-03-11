<script lang="ts">
  import { onMount } from "svelte";
  import { lenisController } from "../Lenis";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { spring } from "svelte/motion";

  let scrollbar: HTMLElement;
  let customCursor: HTMLElement;
  let customCursorContainer: HTMLElement;

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Custom cursor spring effect
  const cursorSpring = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.15,
      damping: 0.65,
    }
  );

  // Function to update custom scrollbar
  function updateScrollbar(controller: any) {
    if (!scrollbar) return;

    const { progress, limit } = controller;
    // console.log("updateScrollbar", progress, limit);

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

  // Function to initialize custom cursor
  function initCustomCursor() {
    if (!customCursor || !customCursorContainer) return;

    // Set initial styles for custom cursor
    customCursor.style.position = "fixed";
    customCursor.style.pointerEvents = "none";
    customCursor.style.zIndex = "1500";
    customCursor.style.width = "1.5rem";
    customCursor.style.height = "1.5rem";
    customCursor.style.borderRadius = "50%";
    customCursor.style.backgroundColor = "var(--jasmine)";
    customCursor.style.mixBlendMode = "difference";
    customCursor.style.transform = "translate(-50%, -50%)";
    customCursor.style.transition =
      "width 0.3s, height 0.3s, background-color 0.3s";

    // Set container styles
    customCursorContainer.style.position = "fixed";
    customCursorContainer.style.top = "0";
    customCursorContainer.style.left = "0";
    customCursorContainer.style.width = "100%";
    customCursorContainer.style.height = "100%";
    customCursorContainer.style.pointerEvents = "none";
    customCursorContainer.style.zIndex = "1400";

    // Add mousemove event listener to update cursor position
    document.addEventListener("mousemove", (e: Event) => {
      const mouseEvent = e as MouseEvent;
      // Update spring values
      cursorSpring.set({ x: mouseEvent.clientX, y: mouseEvent.clientY });
    });

    // Subscribe to spring updates to move the cursor
    cursorSpring.subscribe(({ x, y }) => {
      if (customCursor) {
        customCursor.style.left = `${x}px`;
        customCursor.style.top = `${y}px`;
      }
    });

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        customCursor.style.width = "2.5rem";
        customCursor.style.height = "2.5rem";
        customCursor.style.backgroundColor =
          "var(--jasmine-hover, var(--jasmine))";
      });

      element.addEventListener("mouseleave", () => {
        customCursor.style.width = "1.5rem";
        customCursor.style.height = "1.5rem";
        customCursor.style.backgroundColor = "var(--jasmine)";
      });
    });

    // Handle cursor visibility when mouse leaves/enters the window
    document.addEventListener("mouseenter", () => {
      customCursor.style.opacity = "1";
    });

    document.addEventListener("mouseleave", () => {
      customCursor.style.opacity = "0";
    });
  }

  // Function to handle project container interactions
  function setupProjectContainerInteractions() {
    const projectContainers = document.querySelectorAll(
      ".home-project-instance"
    );

    projectContainers.forEach((container) => {
      const projectInfo = container.querySelector(
        ".home-project-info"
      ) as HTMLElement;

      if (projectInfo && customCursorContainer) {
        // Set initial position properties for each info element
        if (!projectInfo.hasAttribute("data-initialized")) {
          // Store the target position
          projectInfo.setAttribute("data-x", "0");
          projectInfo.setAttribute("data-y", "0");

          // Mark as initialized to avoid re-initializing
          projectInfo.setAttribute("data-initialized", "true");

          // Set initial position with GSAP
          gsap.set(projectInfo, {
            x: 0,
            y: 0,
            // Ensure it stays above other elements
            zIndex: "300",
          });
        }

        container.addEventListener("mousemove", (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const rect = container.getBoundingClientRect();
          const x = mouseEvent.clientX - rect.left; // X position within the container
          const y = mouseEvent.clientY - rect.top; // Y position within the container

          // Center the info element on the cursor
          const infoWidth = projectInfo.offsetWidth;
          const infoHeight = projectInfo.offsetHeight;
          const targetX = x - infoWidth / 2;
          const targetY = y - infoHeight / 2;

          // Update the target position attributes
          projectInfo.setAttribute("data-x", targetX.toString());
          projectInfo.setAttribute("data-y", targetY.toString());

          // Animate to the new position with spring physics
          gsap.to(projectInfo, {
            x: targetX,
            y: targetY,
            duration: 0.8, // Duration of the spring animation
            ease: "elastic.out(1, 0.75)", // Spring effect - adjust values for different feel
            overwrite: true, // Ensures only the latest animation runs
          });

          customCursorContainer.style.display = "none";
        });

        container.addEventListener("mouseleave", () => {
          projectInfo.style.transform = ""; // Or a specific default position if needed.
          customCursorContainer.style.display = "block";
        });
      }
    });
  }

  // Function to refresh ScrollTrigger and update scrollbar
  function refreshScrollTrigger() {
    console.log("refresh");
    if ($lenisController) {
      requestAnimationFrame(() => {
        $lenisController.resize();
        updateScrollbar($lenisController);
      });

      ScrollTrigger.refresh(true); // true forces a recalculation of all ScrollTriggers
    }
  }

  // Function to handle Lenis scroll events
  function handleLenisScroll(e: any) {
    // console.log("handleLenisScroll", e);
    updateScrollbar(e);
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
    customCursor = document.querySelector(".custom-cursor") as HTMLElement;
    customCursorContainer = document.querySelector(
      ".custom-cursor-container"
    ) as HTMLElement;

    if (scrollbar) {
      scrollbar.style.cssText = scrollbarStyle;
      initScrollbar();
    }

    if (customCursor && customCursorContainer) {
      initCustomCursor();
    }

    // Setup project container interactions
    setupProjectContainerInteractions();

    // Update scrollbar on window resize
    window.addEventListener("resize", refreshScrollTrigger);

    // Subscribe to Lenis scroll events
    if ($lenisController) {
      $lenisController.on("scroll", handleLenisScroll);
    }

    // Create a MutationObserver to detect significant DOM changes
    let observer: MutationObserver | null = null;

    const observeDOMChanges = () => {
      if (observer) {
        observer.disconnect(); // Stop observing previous target
        observer = null;
      }
      // Select the target node (e.g., the main content container)
      const targetNode = document.querySelector(".page-wrapper"); // Adjust the selector as needed

      if (targetNode) {
        observer = new MutationObserver((mutations) => {
          let significantChange = false;

          for (const mutation of mutations) {
            if (
              mutation.type === "childList" &&
              mutation.addedNodes.length > 0
            ) {
              // Check for significant additions, like new sections or components
              significantChange = Array.from(mutation.addedNodes).some(
                (node) =>
                  node.nodeType === Node.ELEMENT_NODE &&
                  (node as Element).matches("section, div.some-large-component") // Adjust selectors as needed
              );
            } else if (
              mutation.type === "attributes" &&
              (mutation.attributeName === "class" ||
                mutation.attributeName === "style")
            ) {
              // Check for class or style changes that might indicate a layout shift
              const targetElement = mutation.target as Element;

              if (
                targetElement.matches(
                  ".home-project-instance, section, div.some-layout-element"
                )
              ) {
                // Adjust selectors as needed
                significantChange = true;
              }
            }

            if (significantChange) {
              break; // Exit the loop if a significant change is found
            }
          }

          if (significantChange) {
            console.log("significantChange");
            refreshScrollTrigger();
            // Re-setup project container interactions when DOM changes
            setupProjectContainerInteractions();
          }
        });

        // Start observing the target node for configured mutations
        observer.observe(targetNode, {
          childList: true, // Watch for changes in the direct children
          subtree: true, // Watch for changes in descendants
          attributes: true, // Watch for attribute changes
          attributeFilter: ["style", "class"], // Only watch for changes to style and class attributes
        });
      }
    };

    observeDOMChanges(); // Initial observation setup

    if (scrollbar) {
      scrollbar.addEventListener("mouseenter", () => {
        scrollbar.style.opacity = "1";
      });

      scrollbar.addEventListener("mouseleave", () => {
        scrollbar.style.opacity = "0.8";
      });
    }

    return () => {
      window.removeEventListener("resize", refreshScrollTrigger);
      if (observer) {
        observer.disconnect();
      }
      // Unsubscribe from Lenis scroll events
      if ($lenisController) {
        $lenisController.off("scroll", handleLenisScroll);
      }
    };
  });
</script>
