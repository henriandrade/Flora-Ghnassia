<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";

  onMount(() => {
    const videos = document.querySelectorAll("video");
    console.log("Found videos:", videos.length);

    const videoTriggers: ScrollTrigger[] = [];

    videos.forEach((video) => {
      // Ensure videos are muted for autoplay policies and pause initially
      video.muted = true;
      video.autoplay = false; // Explicitly set autoplay to false
      video.playsInline = true; // Important for iOS inline playback
      video.pause();

      // Use ScrollTrigger to play/pause videos based on viewport visibility
      const trigger = ScrollTrigger.create({
        trigger: video,
        start: "top bottom-=20%", // Start playing when 20% of the video enters from the bottom
        end: "bottom top+=20%", // Stop playing when 20% of the video leaves from the top
        onEnter: () => {
          video
            .play()
            .catch((e) => console.error("Video play failed:", video.src, e));
        },
      });
      videoTriggers.push(trigger);
    });

    // Function to refresh ScrollTrigger instances
    const refreshScrollTriggers = () => {
      ScrollTrigger.refresh();
    };

    // Refresh ScrollTrigger on window resize
    window.addEventListener("resize", refreshScrollTriggers);

    // Use MutationObserver to detect DOM changes that might affect layout
    const observer = new ResizeObserver((mutations) => {
      // Basic check: If any mutation occurs, refresh ScrollTrigger.
      // More sophisticated checks could be added here if needed.
      refreshScrollTriggers();
    });

    // Observe the body for changes in children, subtree, and attributes
    observer.observe(document.body);

    // Cleanup function
    return () => {
      // Remove event listener
      window.removeEventListener("resize", refreshScrollTriggers);

      // Disconnect the observer
      observer.disconnect();

      // Kill all ScrollTrigger instances created by this component
      videoTriggers.forEach((trigger) => trigger.kill());

      // Ensure videos are paused when the component unmounts
      videos.forEach((video) => {
        video.pause();
      });
    };
  });
</script>
