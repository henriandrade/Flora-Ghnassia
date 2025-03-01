<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";

  onMount(() => {
    const container = document.querySelector(".cta-row") as HTMLElement;
    const whatsNext = document.querySelector(".next-links") as HTMLElement;

    // Set container to relative positioning
    container.style.position = "relative";
    whatsNext.style.position = "relative";

    // Get the section container element
    const sectionContainer = document.querySelector(
      ".section-container"
    ) as HTMLElement;

    // Create a Map to store original text content
    const linkOriginalText = new Map<HTMLElement, string>();

    // Set fixed dimensions for all elements that might shift
    const links = whatsNext.querySelectorAll(".next-link");
    links.forEach((link) => {
      const linkEl = link as HTMLElement;
      linkEl.style.position = "relative";
      linkEl.style.zIndex = "1";

      // Fix the height of each link
      const height = linkEl.offsetHeight;
      linkEl.style.height = `${height}px`;

      // Fix the height of the h1 inside
      const h1 = linkEl.querySelector("h1") as HTMLElement;
      if (h1) {
        const h1Height = h1.offsetHeight;
        h1.style.height = `${h1Height}px`;

        // Set overflow visible to ensure arrow can appear outside without shifting
        h1.style.overflow = "visible";
        h1.style.position = "relative";

        // Store original text for reference
        linkOriginalText.set(h1, h1.innerHTML);
      }
    });

    // Function to create and position arrow without affecting layout
    const addArrowToText = (element: HTMLElement) => {
      const h1 = element.querySelector("h1") as HTMLElement;
      if (!h1) return;

      // Check if an arrow already exists
      let arrow = h1.querySelector(".next-link-arrow") as HTMLElement;

      if (arrow) {
        // If arrow exists, just make sure it's visible
        gsap.to(arrow, {
          opacity: 1,
          duration: 0.3,
          ease: "power3.inOut",
        });
        return;
      }

      // Create new arrow element
      arrow = document.createElement("span");
      arrow.classList.add("next-link-arrow");

      // Style the arrow for proper alignment
      arrow.style.display = "inline-flex";
      arrow.style.alignItems = "center";
      arrow.style.verticalAlign = "middle";
      arrow.style.height = "0.8em";
      arrow.style.marginRight = "0.5em";
      arrow.style.position = "relative";
      arrow.style.top = "0.05em"; // Small adjustment for perfect alignment
      arrow.style.opacity = "0";

      arrow.innerHTML = `
        <svg height='100%' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.0136719 2L18.0009 2L17.9874 19.9872" stroke="#0B0B0B" style="stroke:#0B0B0B;stroke:color(display-p3 0.0445 0.0445 0.0445);stroke-opacity:1;" stroke-width="2.37472" stroke-miterlimit="10"/>
          <path d="M18.0007 2L2.12112 17.8677" stroke="#0B0B0B" style="stroke:#0B0B0B;stroke:color(display-p3 0.0445 0.0445 0.0445);stroke-opacity:1;" stroke-width="2.37472" stroke-miterlimit="10"/>
        </svg>
      `;

      // Store the original text content
      const originalText = h1.textContent || "";

      // Create a wrapper to ensure proper alignment
      const wrapper = document.createElement("span");
      wrapper.classList.add("next-link-wrapper");
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center";
      wrapper.style.justifyContent = "flex-start"; // Align items to the start

      // For centered text, we need to adjust the wrapper
      const computedStyle = window.getComputedStyle(h1);
      if (computedStyle.textAlign === "center") {
        wrapper.style.justifyContent = "center";
      } else if (computedStyle.textAlign === "right") {
        wrapper.style.justifyContent = "flex-end";
      }

      // Clear the h1 content
      h1.innerHTML = "";

      // Add the arrow and text to the wrapper
      wrapper.appendChild(arrow);

      const textSpan = document.createElement("span");
      textSpan.textContent = originalText;
      wrapper.appendChild(textSpan);

      // Add the wrapper to the h1
      h1.appendChild(wrapper);

      // Animate arrow in
      gsap.fromTo(
        arrow,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.3,
          ease: "power3.inOut",
        }
      );
    };

    // Function to fade out arrow
    const fadeOutArrow = (element: HTMLElement) => {
      const h1 = element.querySelector("h1");
      if (!h1) return;

      const arrow = h1.querySelector(".next-link-arrow") as HTMLElement;
      if (!arrow) return;

      // Animate the arrow out
      gsap.to(arrow, {
        opacity: 0,
        duration: 0.3,
        ease: "power3.inOut",
        onComplete: () => {
          // Restore original text after animation completes
          if (h1 && linkOriginalText.has(h1 as HTMLElement)) {
            h1.innerHTML = linkOriginalText.get(h1 as HTMLElement) || "";
          }
        },
      });
    };

    // Function to fade out all arrows and restore original text
    const fadeOutAllArrows = () => {
      const allArrows = document.querySelectorAll(".next-link-arrow");

      if (allArrows.length === 0) {
        // If no arrows, just restore original text
        links.forEach((link) => {
          const h1 = link.querySelector("h1") as HTMLElement;
          if (h1 && linkOriginalText.has(h1)) {
            h1.innerHTML = linkOriginalText.get(h1) || "";
          }
        });
        return;
      }

      // Count for tracking when all animations complete
      let animationCount = allArrows.length;

      // Animate all arrows out
      allArrows.forEach((arrowEl) => {
        const arrow = arrowEl as HTMLElement;
        const h1 = arrow.closest("h1") as HTMLElement;

        gsap.to(arrow, {
          opacity: 0,
          duration: 0.3,
          ease: "power3.inOut",
          onComplete: () => {
            animationCount--;

            // When all animations complete, restore original text
            if (animationCount === 0) {
              links.forEach((link) => {
                const linkH1 = link.querySelector("h1") as HTMLElement;
                if (linkH1 && linkOriginalText.has(linkH1)) {
                  linkH1.innerHTML = linkOriginalText.get(linkH1) || "";
                }
              });
            }
          },
        });
      });
    };

    // Create the hover background element
    const createHoverBg = () => {
      const bg = document.createElement("div");
      bg.style.position = "absolute";
      bg.style.backgroundColor = "var(--jasmine)";
      bg.style.zIndex = "0";
      bg.style.opacity = "0";
      bg.style.pointerEvents = "none";

      // Make the background span the full width of section-container
      if (sectionContainer) {
        const sectionRect = sectionContainer.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Calculate the left offset to align with section-container
        const leftOffset = containerRect.left - sectionRect.left;

        // Set the width to match section-container
        bg.style.width = `${sectionRect.width}px`;
        bg.style.left = `${-leftOffset}px`;
      } else {
        // Fallback if section container is not found
        bg.style.width = "100%";
        bg.style.left = "0";
      }

      return bg;
    };

    // Get the cta-heading element
    const ctaHeading = document.querySelector(".cta-heading") as HTMLElement;

    // Function to track mouse movement
    const trackMousePosition = (e: MouseEvent) => {
      lastMousePosition = { x: e.clientX, y: e.clientY };
    };

    // Add global mouse move listener
    document.addEventListener("mousemove", trackMousePosition);

    // Function to update heading visibility
    const updateHeadingVisibility = (isHovering: boolean) => {
      if (isHovering) {
        // Fade out the heading
        gsap.to(ctaHeading, {
          opacity: 0,
          duration: 0.25,
          ease: "power3.inOut",
        });
      } else {
        // Fade in the heading
        gsap.to(ctaHeading, {
          opacity: 1,
          duration: 0.25,
          ease: "power3.inOut",
        });
      }
    };

    // Function to animate out a background element
    const animateOutBackground = (bg: HTMLElement, mouseEvent: MouseEvent) => {
      if (!bg || !bg.parentNode) return;

      // Get the element's rect
      const bgRect = bg.getBoundingClientRect();

      // Determine exit direction based on Y position within the element
      const mouseYRelative = mouseEvent.clientY - bgRect.top;
      const mouseYPercentage = mouseYRelative / bgRect.height;
      const scaleDirection = mouseYPercentage < 0.5 ? "up" : "down";

      // Set transform origin
      bg.style.transformOrigin =
        scaleDirection === "down" ? "top center" : "bottom center";

      // Use GSAP to animate out
      gsap.to(bg, {
        scaleY: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power3.inOut",
        onComplete: () => {
          if (bg.parentNode) {
            bg.remove();
          }
          // Remove from active backgrounds array
          activeBackgrounds = activeBackgrounds.filter((item) => item !== bg);
        },
      });
    };

    let activeLink: HTMLElement | null = null;
    let hoverTimeout: ReturnType<typeof setTimeout> | null = null;
    let pendingLink: HTMLElement | null = null;
    let lastMousePosition = { x: 0, y: 0 };
    let activeBackgrounds: HTMLElement[] = [];

    // Function to handle link hover
    const handleLinkHover = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const target = mouseEvent.currentTarget as HTMLElement;

      // Clear any existing timeout
      if (hoverTimeout !== null) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }

      // Store the pending link
      pendingLink = target;

      // Set a timeout to activate the hover after 80ms
      hoverTimeout = setTimeout(() => {
        // If mouse has moved to another element, ignore this timeout
        if (pendingLink !== target) return;

        const isDirectNeighbor =
          activeLink &&
          (activeLink.nextElementSibling === target ||
            activeLink.previousElementSibling === target);

        if (activeLink === target) return;

        const linkRect = target.getBoundingClientRect();

        // Determine scale direction based on Y position within the hovered element
        const mouseYRelative = mouseEvent.clientY - linkRect.top;
        const mouseYPercentage = mouseYRelative / linkRect.height;
        const scaleDirection = mouseYPercentage < 0.5 ? "down" : "up";

        // Fade out the heading when hovering
        updateHeadingVisibility(true);

        // Add arrow to the hovered link text with animation
        addArrowToText(target);

        // If there was a previously active link, fade out its arrow
        if (activeLink && activeLink !== target) {
          fadeOutArrow(activeLink);
        }

        if (isDirectNeighbor && activeBackgrounds.length > 0) {
          // For direct neighbors, animate the movement smoothly with GSAP
          const currentBg = activeBackgrounds[activeBackgrounds.length - 1];

          gsap.to(currentBg, {
            top: `${linkRect.top - container.getBoundingClientRect().top}px`,
            height: `${linkRect.height}px`,
            duration: 0.3,
            ease: "power3.inOut",
          });
        } else {
          // For non-adjacent links or first hover

          // Create a new background element
          const newBg = createHoverBg();
          container.appendChild(newBg);

          // Position the new background
          newBg.style.top = `${linkRect.top - container.getBoundingClientRect().top}px`;
          newBg.style.height = `${linkRect.height}px`;
          newBg.style.transform = `scaleY(0)`;
          newBg.style.transformOrigin =
            scaleDirection === "down" ? "top center" : "bottom center";

          // Add to active backgrounds array
          activeBackgrounds.push(newBg);

          // Animate out previous background if it exists and not a direct neighbor
          if (activeLink && !isDirectNeighbor && activeBackgrounds.length > 1) {
            const prevBg = activeBackgrounds[activeBackgrounds.length - 2];

            // For the exit animation, use the oppo site direction of the entry
            const exitDirection = scaleDirection === "down" ? "up" : "down";
            prevBg.style.transformOrigin =
              exitDirection === "down" ? "top center" : "bottom center";

            // Animate out with GSAP
            gsap.to(prevBg, {
              scaleY: 0,
              opacity: 0,
              duration: 0.3,
              ease: "power3.inOut",
              onComplete: () => {
                if (prevBg.parentNode) {
                  prevBg.remove();
                }
                // Remove from active backgrounds array
                activeBackgrounds = activeBackgrounds.filter(
                  (item) => item !== prevBg
                );
              },
            });
          }

          // Animate in the new background with GSAP
          gsap.fromTo(
            newBg,
            { scaleY: 0, opacity: 0 },
            {
              scaleY: 1,
              opacity: 1,
              duration: 0.3,
              ease: "power3.inOut",
            }
          );
        }

        activeLink = target;
        hoverTimeout = null;
      }, 80);
    };

    // Function to handle mouse leave
    const handleMouseLeave = (e: Event) => {
      // Clear any pending hover timeout
      if (hoverTimeout !== null) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }

      pendingLink = null;

      if (!activeLink) return;

      const mouseEvent = e as MouseEvent;
      const relatedTarget = mouseEvent.relatedTarget as HTMLElement;
      const isHoveringAnotherLink =
        relatedTarget && relatedTarget.closest(".next-link") !== null;

      if (!isHoveringAnotherLink) {
        // Animate out all active backgrounds
        [...activeBackgrounds].forEach((bg) => {
          animateOutBackground(bg, mouseEvent);
        });

        // Fade the heading back in
        updateHeadingVisibility(false);

        // Fade out all arrows
        fadeOutAllArrows();

        activeLink = null;
      }
    };

    // Function to handle container mouse leave
    const handleContainerMouseLeave = (e: Event) => {
      // Clear any pending hover timeout
      if (hoverTimeout !== null) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }

      pendingLink = null;

      if (activeBackgrounds.length === 0) return;

      const mouseEvent = e as MouseEvent;

      // Animate out all active backgrounds
      [...activeBackgrounds].forEach((bg) => {
        animateOutBackground(bg, mouseEvent);
      });

      // Fade the heading back in
      updateHeadingVisibility(false);

      // Fade out all arrows
      fadeOutAllArrows();

      activeLink = null;
    };

    // Function to check if mouse is outside container
    const checkMouseOutside = (e: MouseEvent) => {
      if (activeBackgrounds.length === 0) return;

      const containerRect = container.getBoundingClientRect();
      const isOutside =
        e.clientX < containerRect.left - 10 ||
        e.clientX > containerRect.right + 10 ||
        e.clientY < containerRect.top - 10 ||
        e.clientY > containerRect.bottom + 10;

      if (isOutside) {
        // Animate out all active backgrounds
        [...activeBackgrounds].forEach((bg) => {
          animateOutBackground(bg, e);
        });

        activeLink = null;
      }
    };

    // Add event listeners
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover as EventListener);
      link.addEventListener("mouseleave", handleMouseLeave as EventListener);
    });

    // Add container mouse leave handlers
    container.addEventListener(
      "mouseleave",
      handleContainerMouseLeave as EventListener
    );
    whatsNext.addEventListener(
      "mouseleave",
      handleContainerMouseLeave as EventListener
    );

    // Add global mouse move handler
    document.addEventListener("mousemove", (e: MouseEvent) => {
      trackMousePosition(e);
      checkMouseOutside(e);
    });

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", trackMousePosition);

      links.forEach((link) => {
        link.removeEventListener(
          "mouseenter",
          handleLinkHover as EventListener
        );
        link.removeEventListener(
          "mouseleave",
          handleMouseLeave as EventListener
        );
      });

      container.removeEventListener(
        "mouseleave",
        handleContainerMouseLeave as EventListener
      );
      whatsNext.removeEventListener(
        "mouseleave",
        handleContainerMouseLeave as EventListener
      );
    };
  });
</script>
