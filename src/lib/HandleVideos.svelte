<script lang="ts">
  import { onMount } from "svelte";

  const checkAutoplay = (video: HTMLVideoElement) => {
    const isPortrait = window.innerWidth < window.innerHeight;
    const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isPortrait || isMobile) {
      video.play();
    } else {
      video.pause();
    }
  };

  onMount(() => {
    const videos =
      document.querySelectorAll<HTMLVideoElement>(".fun-section video");

    videos.forEach((video) => {
      video.pause();
      video.muted = true; // Ensure video is muted

      // Initial check for autoplay
      checkAutoplay(video);

      // Play on hover for desktop
      video.addEventListener("mouseenter", () => {
        video.play();
      });

      video.addEventListener("mouseleave", () => {
        video.pause();
      });

      // Listen for window resize to re-check autoplay conditions
      window.addEventListener("resize", () => {
        checkAutoplay(video);
      });
    });
  });
</script>
