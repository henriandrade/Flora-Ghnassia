<svelte:options customElement="florag-webflow-animations" />

<script lang="ts">
  import { onMount } from "svelte";
  import HeroTextAnimation from "@/lib/HeroTextAnimation.svelte";
  import HomeImagesParallaxEffect from "@/lib/HomeImagesParallaxEffect.svelte";
  import MenuAnimation from "@/lib/MenuAnimation.svelte";
  import DrawingCanvas from "@/lib/DrawingCanvas.svelte";

  let webflowIsReady = false;
  let showDrawingCanvas = false;

  export function whenDomIsReady(callback: () => void) {
    // Wait for both DOM content and fonts to be loaded
    Promise.all([
      document.fonts.ready,
      new Promise<void>((resolve) => {
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", () => resolve());
        } else {
          resolve();
        }
      }),
    ]).then(() => {
      requestAnimationFrame(() => {
        callback();
      });
    });
  }

  onMount(() => {
    whenDomIsReady(() => {
      console.log("Webflow Custom Animations Loaded v3");
      webflowIsReady = true;

      // Wait 20 seconds before showing DrawingCanvas
      setTimeout(() => {
        showDrawingCanvas = true;
      }, 20000);
    });
  });
</script>

{#if webflowIsReady}
  <HeroTextAnimation />
  <HomeImagesParallaxEffect />
  <MenuAnimation />
  {#if showDrawingCanvas}
    <DrawingCanvas />
  {/if}
{/if}
