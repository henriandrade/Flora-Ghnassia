<svelte:options customElement="florag-three-canvas" />

<script lang="ts">
  import { Canvas, T } from "@threlte/core";
  import { ImageMaterial, OrbitControls } from "@threlte/extras";
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { MathUtils, type Group, Vector3 } from "three";

  let container: HTMLDivElement;
  let aspect = 1;
  let group: Group;

  // Create a target vector for the camera to look at
  const cameraTarget = new Vector3(0, -200, 0);

  // Create a function to setup the ScrollTrigger animation
  const setupScrollTrigger = () => {
    if (group) {
      gsap.fromTo(
        group.rotation,
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
  };

  // Use Svelte reactivity to detect when group is defined
  $: if (group) {
    setupScrollTrigger();
  }

  onMount(() => {
    const updateAspect = () => {
      if (container) {
        aspect = container.clientWidth / container.clientHeight;
      }
    };

    updateAspect();
    window.addEventListener("resize", updateAspect);

    return () => {
      window.removeEventListener("resize", updateAspect);
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
      rotation.z={5 * MathUtils.DEG2RAD}
      zoom={2.5}
    />
    <T.Group position={[0, -0.5, 0]}>
      <T.Mesh name="flora-person">
        <T.PlaneGeometry args={[1, 5]} />
        <ImageMaterial
          transparent
          side={2}
          url="https://cdn.prod.website-files.com/67a0fb16e98014c2e8572448/67c0f925d2b40212f348b3a7_flora.png"
        />
      </T.Mesh>
      <T.Group bind:ref={group}>
        <T.Mesh
          name="flora-shadow"
          rotation.x={Math.PI / 2}
          position={[-0.4, -2.45, 1.75]}
        >
          <T.PlaneGeometry args={[1, 5]} />
          <ImageMaterial
            transparent
            side={2}
            url="https://cdn.prod.website-files.com/67a0fb16e98014c2e8572448/67c0f92a0f6906a8aa87c079_flora-shadow.png"
          />
        </T.Mesh>
        <T.Mesh name="flora-frame" position={[0, 2, -4]}>
          <T.PlaneGeometry args={[1.5, 3]} />
          <ImageMaterial
            side={2}
            transparent
            url="https://cdn.prod.website-files.com/67a0fb16e98014c2e8572448/67b7be73078ec50bf1b6ce04_flora-frame.png"
          />
        </T.Mesh></T.Group
      >
    </T.Group>
  </Canvas>
</div>
