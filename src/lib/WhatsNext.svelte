<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";

  onMount(() => {
    const whatsNextSection = document.querySelector(
      ".whats-next-section"
    ) as HTMLElement;
    const container = whatsNextSection.querySelector(".cta-row") as HTMLElement;
    const whatsNext = whatsNextSection.querySelector(
      ".next-links"
    ) as HTMLElement;
    const sectionContainer = whatsNextSection.querySelector(
      ".section-container"
    ) as HTMLElement;
    const ctaHeading = whatsNextSection.querySelector(
      ".cta-heading"
    ) as HTMLElement;

    // Check if section has black background
    const hasBlackBg = whatsNextSection.classList.contains("black-bg");

    container.style.position = "relative";
    whatsNext.style.position = "relative";

    const linkOriginalText = new Map<HTMLElement, string>();
    const linkOriginalStyles = new Map<HTMLElement, string>();

    const links = Array.from(whatsNext.querySelectorAll(".next-link"));

    // Pre-calculate and store original link data
    links.forEach((link) => {
      const linkEl = link as HTMLElement;
      linkEl.style.position = "relative";
      linkEl.style.zIndex = "1";
      linkEl.style.height = `${linkEl.offsetHeight}px`;

      const h1 = linkEl.querySelector("h1") as HTMLElement;
      if (h1) {
        h1.style.height = `${h1.offsetHeight}px`;
        h1.style.overflow = "visible";
        h1.style.position = "relative";
        linkOriginalText.set(h1, h1.innerHTML);

        linkEl.querySelectorAll("*").forEach((el) => {
          linkOriginalStyles.set(
            el as HTMLElement,
            (el as HTMLElement).style.color || ""
          );
        });
      }
    });

    const createArrow = (color: string = "#0B0B0B") => {
      const arrow = document.createElement("span");
      arrow.classList.add("next-link-arrow");
      arrow.style.cssText = `
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        height: 0.8em;
        margin-right: 0.5em;
        position: relative;
        top: 0.05em;
        opacity: 0;
      `;
      arrow.innerHTML = `
        <svg height='100%' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.0136719 2L18.0009 2L17.9874 19.9872" stroke="${color}" style="stroke:${color};stroke-opacity:1;" stroke-width="2.37472" stroke-miterlimit="10"/>
          <path d="M18.0007 2L2.12112 17.8677" stroke="${color}" style="stroke:${color};stroke-opacity:1;" stroke-width="2.37472" stroke-miterlimit="10"/>
        </svg>
      `;
      return arrow;
    };

    const addArrowToText = (element: HTMLElement) => {
      const h1 = element.querySelector("h1") as HTMLElement;
      if (!h1) return;

      let arrow = h1.querySelector(".next-link-arrow") as HTMLElement;
      if (arrow) {
        gsap.to(arrow, { opacity: 1, duration: 0.3, ease: "power3.inOut" });
        return;
      }

      // Get the computed text color to match the arrow color
      const computedStyle = window.getComputedStyle(h1);
      const textColor = computedStyle.color;

      arrow = createArrow(textColor);
      const originalText = h1.textContent || "";
      const wrapper = document.createElement("span");
      wrapper.classList.add("next-link-wrapper");
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center";

      wrapper.style.justifyContent =
        computedStyle.textAlign === "center"
          ? "center"
          : computedStyle.textAlign === "right"
            ? "flex-end"
            : "flex-start";

      h1.innerHTML = "";
      wrapper.append(arrow, document.createTextNode(originalText));
      h1.appendChild(wrapper);

      gsap.fromTo(
        arrow,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power3.inOut" }
      );
    };

    const fadeOutArrow = (element: HTMLElement) => {
      const h1 = element.querySelector("h1") as HTMLElement;
      if (!h1) return;

      const arrow = h1.querySelector(".next-link-arrow") as HTMLElement;
      if (!arrow) return;

      gsap.to(arrow, {
        opacity: 0,
        duration: 0.3,
        ease: "power3.inOut",
        onComplete: () => {
          if (h1 && linkOriginalText.has(h1)) {
            h1.innerHTML = linkOriginalText.get(h1) || "";
          }
        },
      });
    };

    // Modified fadeOutAllArrows to prevent premature removal
    const fadeOutAllArrows = () => {
      const allArrows = document.querySelectorAll(".next-link-arrow");

      allArrows.forEach((arrowEl) => {
        const arrow = arrowEl as HTMLElement;

        gsap.to(arrow, {
          opacity: 0,
          duration: 0.3,
          ease: "power3.inOut",
          onComplete: () => {
            // Only remove if no link is currently active
            if (!activeLink) {
              const h1 = arrow.closest("h1") as HTMLElement;
              if (h1 && linkOriginalText.has(h1)) {
                h1.innerHTML = linkOriginalText.get(h1) || "";
              }
            }
          },
        });
      });
    };

    const createHoverBg = () => {
      const bg = document.createElement("div");
      // Set background color based on whether section has black background
      const bgColor = hasBlackBg ? "var(--jasmine)" : "var(--website--black)";

      bg.style.cssText = `
        position: absolute;
        background-color: ${bgColor};
        z-index: 0;
        opacity: 0;
        pointer-events: none;
      `;

      if (sectionContainer) {
        const sectionRect = sectionContainer.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const leftOffset = containerRect.left - sectionRect.left;
        bg.style.width = `${sectionRect.width}px`;
        bg.style.left = `${-leftOffset}px`;
      } else {
        bg.style.width = "100%";
        bg.style.left = "0";
      }

      return bg;
    };

    const updateHeadingVisibility = (isHovering: boolean) => {
      gsap.to(ctaHeading, {
        opacity: isHovering ? 0 : 1,
        duration: 0.25,
        ease: "power3.inOut",
      });
    };

    const setLinkBorders = (link: HTMLElement, hovering: boolean) => {
      const isLastLink = !link.nextElementSibling;

      const targetTopBorderColor = hovering
        ? "transparent"
        : "var(--website--white)";
      const targetBottomBorderColor = hovering
        ? "transparent"
        : "var(--website--white)";

      gsap.to(link, {
        borderTopColor: targetTopBorderColor,
        duration: 0.4,
        ease: "power3.out",
      });

      // Only set the bottom border if it is the last link
      if (isLastLink) {
        gsap.to(link, {
          borderBottomColor: targetBottomBorderColor,
          duration: 0.4,
          ease: "power3.out",
        });
      }

      const nextSibling = link.nextElementSibling;
      if (nextSibling && nextSibling.classList.contains("next-link")) {
        gsap.to(nextSibling, {
          borderTopColor: targetTopBorderColor,
          duration: 0.4,
          ease: "power3.out",
        });
      }
    };

    const setLinkTextColor = (link: HTMLElement, hovering: boolean) => {
      // Set text color based on whether section has black background
      const hoverColor = hasBlackBg
        ? "var(--website--black)"
        : "var(--website--white)";
      const color = hovering ? hoverColor : "";

      link.querySelectorAll("*").forEach((el) => {
        const element = el as HTMLElement;
        element.style.color = hovering
          ? color
          : linkOriginalStyles.get(element) || "";
      });

      // Update arrow color to match text color
      const h1 = link.querySelector("h1") as HTMLElement;
      if (h1) {
        const arrow = h1.querySelector(".next-link-arrow svg") as SVGElement;
        if (arrow) {
          const paths = arrow.querySelectorAll("path");
          paths.forEach((path) => {
            path.setAttribute("stroke", hovering ? hoverColor : "currentColor");
            path.style.stroke = hovering ? hoverColor : "currentColor";
          });
        }
      }
    };

    const animateOutBackground = (bg: HTMLElement, mouseEvent: MouseEvent) => {
      if (!bg || !bg.parentNode) return;

      const bgRect = bg.getBoundingClientRect();
      const mouseYRelative = mouseEvent.clientY - bgRect.top;
      const scaleDirection =
        mouseYRelative / bgRect.height < 0.5 ? "up" : "down";
      bg.style.transformOrigin =
        scaleDirection === "down" ? "top center" : "bottom center";

      gsap.to(bg, {
        scaleY: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power3.inOut",
        onComplete: () => {
          bg.remove();
          activeBackgrounds = activeBackgrounds.filter((item) => item !== bg);
        },
      });
    };

    let activeLink: HTMLElement | null = null;
    let hoverTimeout: ReturnType<typeof setTimeout> | null = null;
    let pendingLink: HTMLElement | null = null;
    let activeBackgrounds: HTMLElement[] = [];

    const handleLinkHover = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;

      if (hoverTimeout !== null) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }

      pendingLink = target;

      hoverTimeout = setTimeout(() => {
        if (pendingLink !== target || activeLink === target) return;

        const isDirectNeighbor =
          activeLink &&
          (activeLink.nextElementSibling === target ||
            activeLink.previousElementSibling === target);

        const linkTop = target.offsetTop;
        const linkHeight = target.offsetHeight;
        const mouseYRelative = e.offsetY;
        const scaleDirection =
          mouseYRelative / linkHeight < 0.5 ? "down" : "up";

        updateHeadingVisibility(true);
        addArrowToText(target);
        setLinkBorders(target, true);
        setLinkTextColor(target, true);

        if (activeLink) {
          fadeOutArrow(activeLink);
          setLinkBorders(activeLink, false);
          setLinkTextColor(activeLink, false);
        }

        if (isDirectNeighbor && activeBackgrounds.length > 0) {
          const currentBg = activeBackgrounds[activeBackgrounds.length - 1];
          gsap.to(currentBg, {
            top: `${linkTop}px`,
            height: `${linkHeight}px`,
            duration: 0.3,
            ease: "power3.inOut",
          });
        } else {
          const newBg = createHoverBg();
          container.appendChild(newBg);
          newBg.style.top = `${linkTop}px`;
          newBg.style.height = `${linkHeight}px`;
          newBg.style.transform = `scaleY(0)`;
          newBg.style.transformOrigin =
            scaleDirection === "down" ? "top center" : "bottom center";
          activeBackgrounds.push(newBg);

          if (activeLink && !isDirectNeighbor && activeBackgrounds.length > 1) {
            const prevBg = activeBackgrounds[activeBackgrounds.length - 2];
            const exitDirection = scaleDirection === "down" ? "up" : "down";
            prevBg.style.transformOrigin =
              exitDirection === "down" ? "top center" : "bottom center";

            gsap.to(prevBg, {
              scaleY: 0,
              opacity: 0,
              duration: 0.3,
              ease: "power3.inOut",
              onComplete: () => {
                prevBg.remove();
                activeBackgrounds = activeBackgrounds.filter(
                  (item) => item !== prevBg
                );
              },
            });
          }

          gsap.fromTo(
            newBg,
            { scaleY: 0, opacity: 0 },
            { scaleY: 1, opacity: 1, duration: 0.3, ease: "power3.inOut" }
          );
        }

        activeLink = target;
        hoverTimeout = null;
      }, 80);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (hoverTimeout !== null) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }

      pendingLink = null;

      // Do not immediately fade out arrows, wait for container leave
      if (!activeLink) return;

      const relatedTarget = e.relatedTarget as HTMLElement;
      const isHoveringAnotherLink =
        relatedTarget && relatedTarget.closest(".next-link") !== null;

      if (!isHoveringAnotherLink) {
        // Only proceed if not hovering another link
        activeBackgrounds.forEach((bg) => animateOutBackground(bg, e));
        updateHeadingVisibility(false);
        setLinkBorders(activeLink, false);
        setLinkTextColor(activeLink, false);
        // activeLink = null; // Don't nullify here, wait for container leave
      }
    };

    const handleContainerMouseLeave = (e: MouseEvent) => {
      if (hoverTimeout !== null) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }

      pendingLink = null;
      if (activeBackgrounds.length === 0 && !activeLink) return;

      activeBackgrounds.forEach((bg) => animateOutBackground(bg, e));
      updateHeadingVisibility(false);
      fadeOutAllArrows(); // Now safe to call because we are sure mouse is outside
      if (activeLink) {
        setLinkBorders(activeLink, false);
        setLinkTextColor(activeLink, false);
      }
      activeLink = null; // Nullify activeLink here
    };

    const checkMouseOutside = (e: MouseEvent) => {
      if (activeBackgrounds.length === 0 && !activeLink) return;

      const containerRect = container.getBoundingClientRect();
      const isOutside =
        e.clientX < containerRect.left - 10 ||
        e.clientX > containerRect.right + 10 ||
        e.clientY < containerRect.top - 10 ||
        e.clientY > containerRect.bottom + 10;

      if (isOutside) {
        activeBackgrounds.forEach((bg) => animateOutBackground(bg, e));
        // fadeOutAllArrows(); // Don't call here, handle on container leave
        activeLink = null;
      }
    };

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover as EventListener);
      link.addEventListener("mouseleave", handleMouseLeave as EventListener);
    });

    container.addEventListener(
      "mouseleave",
      handleContainerMouseLeave as EventListener
    );
    whatsNext.addEventListener(
      "mouseleave",
      handleContainerMouseLeave as EventListener
    );
    document.addEventListener("mousemove", (e: MouseEvent) =>
      checkMouseOutside(e)
    );

    return () => {
      document.removeEventListener("mousemove", checkMouseOutside);
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
