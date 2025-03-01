<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const videos =
      document.querySelectorAll<HTMLVideoElement>(".fun-section video");

    videos.forEach((video) => {
      video.pause();
      video.muted = true; // Ensure video is muted

      // Play on hover for desktop
      video.addEventListener("mouseenter", () => {
        video.play();
      });

      video.addEventListener("mouseleave", () => {
        video.pause();
      });

      // Autoplay on mobile (touch devices)
      if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
        video.play();
      }
    });
  });
</script>
