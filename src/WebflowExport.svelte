<svelte:options customElement="florag-webflow-animations" />

<script lang="ts">
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

  console.log("Svelte Exists");
  onMount(() => {
    console.log("Mounted");
    whenDomIsReady(() => {
      console.log("Dom is ready");
      webflowIsReady = true;
    });
  });
</script>
