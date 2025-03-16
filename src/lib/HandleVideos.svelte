<script lang="ts">
  import { onMount } from "svelte";

  const checkAutoplay = (video: HTMLVideoElement) => {
    const isPortrait = window.innerWidth < window.innerHeight;
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isPortrait || isMobile) {
      console.log("playing");
      video.play();
    } else {
      video.pause();
    }
  };

  onMount(() => {
    const videos =
      document.querySelectorAll<HTMLVideoElement>(".fun-video video");

    videos.forEach((video, index) => {
      video.pause();
      video.muted = true; // Ensure video is muted

      // Initial check for autoplay
      checkAutoplay(video);

      // If it's the third video, set currentTime to 3
      if (index === 2) {
        video.currentTime = 4;
      }

      // Play on hover for desktop
      video.parentElement?.addEventListener("mouseenter", () => {
        video.play();
      });

      video.parentElement?.addEventListener("mouseleave", () => {
        video.pause();
      });

      // Listen for window resize to re-check autoplay conditions
      window.addEventListener("resize", () => {
        checkAutoplay(video);
      });
    });
  });
</script>
