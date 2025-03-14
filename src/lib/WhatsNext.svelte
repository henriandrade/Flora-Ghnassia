<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";

  onMount(() => {
    // Cache DOM elements once
    const whatsNextSection = document.querySelector(
      ".whats-next-section"
    ) as HTMLElement;
    if (!whatsNextSection) return; // Early return if element not found

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

    if (!container || !whatsNext) return; // Early return if required elements not found

    // Check if section has black background
    const hasBlackBg = whatsNextSection.classList.contains("black-bg");
    const hoverBgColor = hasBlackBg
      ? "var(--jasmine)"
      : "var(--website--black)";
    const hoverTextColor = hasBlackBg
      ? "var(--website--black)"
      : "var(--website--white)";

    // Set static styles once
    container.style.position = "relative";
    whatsNext.style.position = "relative";

    const linkOriginalText = new Map<HTMLElement, string>();
    const linkOriginalStyles = new Map<HTMLElement, string>();

    // Get all links once
    const links = Array.from(whatsNext.querySelectorAll(".next-link"));

    // Create arrow template for reuse
    const createArrowTemplate = (color: string = "#0B0B0B") => {
      return `
        <span class="next-link-arrow" style="
          display: inline-flex;
          align-items: center;
          vertical-align: middle;
          height: 0.8em;
          margin-right: 0.5em;
          position: relative;
          top: 0.05em;
          opacity: 0;
        ">
          <svg height='100%' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0136719 2L18.0009 2L17.9874 19.9872" stroke="${color}" style="stroke:${color};stroke-opacity:1;" stroke-width="2.37472" stroke-miterlimit="10"/>
            <path d="M18.0007 2L2.12112 17.8677" stroke="${color}" style="stroke:${color};stroke-opacity:1;" stroke-width="2.37472" stroke-miterlimit="10"/>
          </svg>
        </span>
      `;
    };

    // Pre-calculate section dimensions for background positioning
    let sectionRect: DOMRect | null = null;
    let containerRect: DOMRect | null = null;
    let leftOffset: number | null = null;
    if (sectionContainer) {
      sectionRect = sectionContainer.getBoundingClientRect();
      containerRect = container.getBoundingClientRect();
      leftOffset = containerRect.left - sectionRect.left;
    }

    // Pre-calculate and store original link data, and handle surprise links
    links.forEach((link) => {
      const linkEl = link as HTMLElement;

      // Handle surprise links
      if (linkEl.hasAttribute("surprise-links")) {
        const surpriseLinksAttr = linkEl.getAttribute("surprise-links");
        if (surpriseLinksAttr) {
          const surpriseLinks = surpriseLinksAttr.slice(1, -1).split(",");
          if (surpriseLinks.length > 0) {
            const randomIndex = Math.floor(
              Math.random() * surpriseLinks.length
            );
            const randomProject = surpriseLinks[randomIndex];
            linkEl.setAttribute("href", `/projects/${randomProject}`);
          }
        }
      }

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

    const addArrowToText = (element: HTMLElement) => {
      const h1 = element.querySelector("h1") as HTMLElement;
      if (!h1) return;

      let arrow = h1.querySelector(".next-link-arrow") as HTMLElement;
      if (arrow) {
        gsap.to(arrow, {
          opacity: 1,
          duration: 0.2,
          delay: 0.15,
          ease: "power5.out",
        });
        return;
      }

      // Get the computed text color to match the arrow color
      const computedStyle = window.getComputedStyle(h1);
      const textColor = computedStyle.color;
      const textAlign = computedStyle.textAlign;

      const originalText = h1.textContent || "";

      // Create wrapper with arrow and text
      h1.innerHTML = `
        <span class="next-link-wrapper" style="
          display: flex;
          align-items: center;
          justify-content: ${
            textAlign === "center"
              ? "center"
              : textAlign === "right"
                ? "flex-end"
                : "flex-start"
          }
        ">
          ${createArrowTemplate(textColor)}
          ${originalText}
        </span>
      `;

      arrow = h1.querySelector(".next-link-arrow") as HTMLElement;
      gsap.fromTo(
        arrow,
        { opacity: 0 },
        { opacity: 1, duration: 0.1, delay: 0.2, ease: "power5.out" }
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

      bg.style.cssText = `
        position: absolute;
        background-color: ${hoverBgColor};
        z-index: 0;
        opacity: 0;
        pointer-events: none;
      `;

      if (sectionContainer && sectionRect && leftOffset) {
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
      const targetBorderColor = hovering
        ? "transparent"
        : "var(--website--white)";

      gsap.to(link, {
        borderTopColor: targetBorderColor,
        duration: 0.1,
        ease: "linear",
      });

      // Only set the bottom border if it is the last link
      if (isLastLink) {
        gsap.to(link, {
          borderBottomColor: targetBorderColor,
          duration: 0.1,
          ease: "linear",
        });
      }

      const nextSibling = link.nextElementSibling;
      if (nextSibling && nextSibling.classList.contains("next-link")) {
        gsap.to(nextSibling, {
          borderTopColor: targetBorderColor,
          duration: 0.1,
          ease: "linear",
        });
      }
    };

    const setLinkTextColor = (link: HTMLElement, hovering: boolean) => {
      const color = hovering ? hoverTextColor : "";

      gsap.to(link.querySelectorAll("*"), {
        color: (index, element) =>
          hovering ? color : linkOriginalStyles.get(element) || "",
        duration: 0.2,
        ease: "power5.out",
      });

      // Update arrow color to match text color
      const h1 = link.querySelector("h1") as HTMLElement;
      if (h1) {
        const arrow = h1.querySelector(".next-link-arrow svg") as SVGElement;
        if (arrow) {
          const paths = arrow.querySelectorAll("path");
          gsap.to(paths, {
            stroke: hovering ? hoverTextColor : "currentColor",
            duration: 0.16,
            delay: 0.15,
            ease: "power5.out",
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
