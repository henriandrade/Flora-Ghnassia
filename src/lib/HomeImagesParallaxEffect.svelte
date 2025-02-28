<script lang="ts">
  import { onMount } from "svelte";
  import { lenisController } from "../Lenis";
  import gsap from "gsap";
  import { spring } from "svelte/motion";
  import { writable } from "svelte/store";

  let projectContainers: NodeListOf<HTMLElement>;

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
    });
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
      image.style.zIndex = "1000";
      image.style.transform = "translateZ(100%)";

      let numberOfCopies = 8;

      // Create a container for the clones
      const clonesContainer = document.createElement("div");
      clonesContainer.classList.add("clones-container");
      clonesContainer.style.zIndex = "0";

      for (let i = 0; i < numberOfCopies; i++) {
        const imgCopy = image.cloneNode(true) as HTMLImageElement;
        imgCopy.classList.remove("original");
        imgCopy.classList.add("clone");
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
        const factor = transformIndex;
        const parallaxY = `calc(var(--scroll-velocity)*${factor}*0.05rem)`;

        element.style.transform = `${rotationTransform} translateY(${parallaxY}) translate3d(${translateX}, ${translateY}, 0)`;
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
  });
</script>
