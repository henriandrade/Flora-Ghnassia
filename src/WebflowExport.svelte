<svelte:options customElement="florag-webflow-animations" />

<script lang="ts">
  import { onMount } from "svelte";
  import HeroTextAnimation from "@/lib/HeroTextAnimation.svelte";
  import HomeImagesParallaxEffect from "@/lib/HomeImagesParallaxEffect.svelte";
  import MenuAnimation from "@/lib/MenuAnimation.svelte";
  import DrawingCanvas from "@/lib/DrawingCanvas.svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import WhatsNext from "@/lib/WhatsNext.svelte";
  import HandleHomeVideos from "@/lib/HandleHomeVideos.svelte";
  import CustomScrollbar from "@/lib/CustomScrollbar.svelte";
  import HandleVideos from "@/lib/HandleVideos.svelte";

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
    gsap.registerPlugin(ScrollTrigger);
    whenDomIsReady(() => {
      webflowIsReady = true;
    });
  });
</script>

{#if webflowIsReady}
  <HeroTextAnimation />
  <MenuAnimation />
  <WhatsNext />
  <CustomScrollbar />
  <HandleHomeVideos />
  {#if !import.meta.env.DEV && window.location.pathname === "/"}
    <HomeImagesParallaxEffect />
    <DrawingCanvas />
  {:else}
    <HandleVideos />
  {/if}
{/if}
