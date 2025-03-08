<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";

  onMount(() => {
    const container = document.querySelector(".cta-row") as HTMLElement;
    const whatsNext = document.querySelector(".next-links") as HTMLElement;
    const sectionContainer = document.querySelector(
      ".section-container"
    ) as HTMLElement;
    const ctaHeading = document.querySelector(".cta-heading") as HTMLElement;

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

    const createArrow = () => {
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
          <path d="M0.0136719 2L18.0009 2L17.9874 19.9872" stroke="#0B0B0B" style="stroke:#0B0B0B;stroke:color(display-p3 0.0445 0.0445 0.0445);stroke-opacity:1;" stroke-width="2.37472" stroke-miterlimit="10"/>
          <path d="M18.0007 2L2.12112 17.8677" stroke="#0B0B0B" style="stroke:#0B0B0B;stroke:color(display-p3 0.0445 0.0445 0.0445);stroke-opacity:1;" stroke-width="2.37472" stroke-miterlimit="10"/>
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

      arrow = createArrow();
      const originalText = h1.textContent || "";
      const wrapper = document.createElement("span");
      wrapper.classList.add("next-link-wrapper");
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center";

      const computedStyle = window.getComputedStyle(h1);
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

    const fadeOutAllArrows = () => {
      const allArrows = document.querySelectorAll(".next-link-arrow");

      if (allArrows.length === 0) {
        links.forEach((link) => {
          const h1 = link.querySelector("h1") as HTMLElement;
          if (h1 && linkOriginalText.has(h1)) {
            h1.innerHTML = linkOriginalText.get(h1) || "";
          }
        });
        return;
      }

      let animationCount = allArrows.length;
      allArrows.forEach((arrowEl) => {
        const arrow = arrowEl as HTMLElement;
        const h1 = arrow.closest("h1") as HTMLElement;

        gsap.to(arrow, {
          opacity: 0,
          duration: 0.3,
          ease: "power3.inOut",
          onComplete: () => {
            if (--animationCount === 0) {
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

    const createHoverBg = () => {
      const bg = document.createElement("div");
      bg.style.cssText = `
        position: absolute;
        background-color: var(--jasmine);
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
      link.style.borderTopColor = hovering
        ? "transparent"
        : "var(--website--white)";
      link.style.borderBottomColor = hovering
        ? "transparent"
        : "var(--website--white)";

      const nextSibling = link.nextElementSibling;
      if (nextSibling && nextSibling.classList.contains("next-link")) {
        (nextSibling as HTMLElement).style.borderTopColor = hovering
          ? "transparent"
          : "var(--website--white)";
      }
    };

    const setLinkTextColor = (link: HTMLElement, hovering: boolean) => {
      const color = hovering ? "var(--website--black)" : "";
      link.querySelectorAll("*").forEach((el) => {
        const element = el as HTMLElement;
        element.style.color = hovering
          ? color
          : linkOriginalStyles.get(element) || "";
      });
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
        // The issue was likely caused by the fact that `getBoundingClientRect()`
        // returns values relative to the viewport. When quickly moving the mouse,
        // especially near the bottom of the container, the calculated `top`
        // position might be slightly off due to rapid changes in scroll position
        // or other layout shifts. Using relative positioning fixes this.

        const isDirectNeighbor =
          activeLink &&
          (activeLink.nextElementSibling === target ||
            activeLink.previousElementSibling === target);

        // Use offsetTop/offsetHeight for calculations relative to the parent
        const linkTop = target.offsetTop;
        const linkHeight = target.offsetHeight;
        const mouseYRelative = e.offsetY; // Use offsetY for relative mouse position
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
          // Use offsetTop for the target position
          gsap.to(currentBg, {
            top: `${linkTop}px`,
            height: `${linkHeight}px`,
            duration: 0.3,
            ease: "power3.inOut",
          });
        } else {
          const newBg = createHoverBg();
          container.appendChild(newBg);
          // Use offsetTop for initial position
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
      if (!activeLink) return;

      const relatedTarget = e.relatedTarget as HTMLElement;
      const isHoveringAnotherLink =
        relatedTarget && relatedTarget.closest(".next-link") !== null;

      if (!isHoveringAnotherLink) {
        activeBackgrounds.forEach((bg) => animateOutBackground(bg, e));
        updateHeadingVisibility(false);
        fadeOutAllArrows();
        setLinkBorders(activeLink, false);
        setLinkTextColor(activeLink, false);
        activeLink = null;
      }
    };

    const handleContainerMouseLeave = (e: MouseEvent) => {
      if (hoverTimeout !== null) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }

      pendingLink = null;
      if (activeBackgrounds.length === 0) return;

      activeBackgrounds.forEach((bg) => animateOutBackground(bg, e));
      updateHeadingVisibility(false);
      fadeOutAllArrows();
      activeLink = null;
    };

    const checkMouseOutside = (e: MouseEvent) => {
      if (activeBackgrounds.length === 0) return;

      const containerRect = container.getBoundingClientRect();
      const isOutside =
        e.clientX < containerRect.left - 10 ||
        e.clientX > containerRect.right + 10 ||
        e.clientY < containerRect.top - 10 ||
        e.clientY > containerRect.bottom + 10;

      if (isOutside) {
        activeBackgrounds.forEach((bg) => animateOutBackground(bg, e));
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
