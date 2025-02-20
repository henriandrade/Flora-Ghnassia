<svelte:options customElement="florag-webflow-animations" />

<script lang="ts">
  import HeroTextAnimation from "@/lib/HeroTextAnimation.svelte";
  import HomeImagesParallaxEffect from "@/lib/HomeImagesParallaxEffect.svelte";
  import MenuAnimation from "@/lib/MenuAnimation.svelte";
  import { onMount, tick } from "svelte";

  let webflowIsReady = false;

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
      console.log("Webflow Custom Animations Loaded v2");
      webflowIsReady = true;
    });
  });
</script>

{#if webflowIsReady}
  <HomeImagesParallaxEffect />
  <MenuAnimation />
{/if}
