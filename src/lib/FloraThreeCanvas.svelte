<svelte:options customElement="florag-three-canvas" />

<script lang="ts">
  import { Canvas, T } from "@threlte/core";
  import { ImageMaterial, OrbitControls } from "@threlte/extras";
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { MathUtils, type Group, Vector3, type Mesh } from "three";

  let container: HTMLDivElement;
  let aspect = 1;
  let groupRef: Group;
  let shadowFrameGroupRef: Group;
  let frameRef: Mesh;
  let mouseX = 0;
  let mouseY = 0;

  // Create a function to setup the ScrollTrigger animation
  const setupScrollTrigger = () => {
    if (shadowFrameGroupRef) {
      gsap.fromTo(
        shadowFrameGroupRef.rotation,
        {
          y: 60 * MathUtils.DEG2RAD,
        },
        {
          y: -60 * MathUtils.DEG2RAD,
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    if (frameRef) {
      gsap.fromTo(
        frameRef.rotation,
        {
          y: 0 * MathUtils.DEG2RAD,
        },
        {
          y: -35 * MathUtils.DEG2RAD,
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  };

  // Use Svelte reactivity to detect when group is defined
  $: if (shadowFrameGroupRef) {
    setupScrollTrigger();
  }

  const handleMouseMove = (event: MouseEvent) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    if (groupRef) {
      groupRef.rotation.y = mouseX * 5 * MathUtils.DEG2RAD;
      groupRef.rotation.x = mouseY * 5 * MathUtils.DEG2RAD;
    }
  };

  onMount(() => {
    const updateAspect = () => {
      if (container) {
        aspect = container.clientWidth / container.clientHeight;
      }
    };

    updateAspect();
    window.addEventListener("resize", updateAspect);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateAspect);
      window.removeEventListener("mousemove", handleMouseMove);
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });
</script>

<div
  bind:this={container}
  style="width: 100%; height: 100%; position: relative;"
>
  <Canvas>
    <T.PerspectiveCamera
      args={[50, aspect, 0.1, 100]}
      makeDefault
      position={[0, 2, 25]}
      rotation.x={-5 * MathUtils.DEG2RAD}
      rotation.z={2.5 * MathUtils.DEG2RAD}
      zoom={2.5}
    />
    <T.Group position={[0, -0.5, 0]} bind:ref={groupRef}>
      <T.Mesh name="flora-person">
        <T.PlaneGeometry args={[1.2, 5]} />
        <ImageMaterial
          transparent
          side={2}
          alphaSmoothing={1}
          toneMapped={false}
          url="https://cdn.prod.website-files.com/67a0fb16e98014c2e8572448/67c0f925d2b40212f348b3a7_flora.png"
        />
      </T.Mesh>
      <T.Group bind:ref={shadowFrameGroupRef}>
        <T.Mesh
          name="flora-shadow"
          rotation.x={Math.PI / 1.9}
          position={[-0.3, -2.6, 1.75]}
        >
          <T.PlaneGeometry args={[1, 5]} />
          <ImageMaterial
            transparent
            side={2}
            alphaSmoothing={1}
            toneMapped={false}
            url="https://cdn.prod.website-files.com/67a0fb16e98014c2e8572448/67c0f92a0f6906a8aa87c079_flora-shadow.png"
          />
        </T.Mesh>
        <T.Mesh name="flora-frame" position={[0, 2, -5]} bind:ref={frameRef}>
          <T.PlaneGeometry args={[3.75, 5.5]} />
          <ImageMaterial
            side={2}
            alphaSmoothing={1}
            transparent
            toneMapped={false}
            url="https://cdn.prod.website-files.com/67a0fb16e98014c2e8572448/67cb7bdf05f61be36a9907fd_e951ed124eeb253405d21f874ab3bfd9.png"
          />
        </T.Mesh></T.Group
      >
    </T.Group>
  </Canvas>
</div>
