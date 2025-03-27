<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";

  // Store triggers, listeners, and observer for cleanup
  let videoTriggers: ScrollTrigger[] = [];
  let hoverListeners: {
    element: HTMLElement;
    type: string;
    listener: EventListener;
  }[] = [];
  let resizeListener: () => void;
  let observer: ResizeObserver;
  let resizeTimeout: ReturnType<typeof setTimeout>; // For debouncing resize

  const isMobileOrPortrait = () => {
    const isPortrait = window.innerWidth < window.innerHeight;
    // Basic mobile check, adjust if needed for more accuracy
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    return isPortrait || isMobile;
  };

  const setupVideoBehavior = (video: HTMLVideoElement, index: number) => {
    // --- Clean up existing state for this video ---
    const existingTriggerIndex = videoTriggers.findIndex(
      (trigger) => trigger.trigger === video
    );
    if (existingTriggerIndex > -1) {
      videoTriggers[existingTriggerIndex].kill();
      videoTriggers.splice(existingTriggerIndex, 1);
    }
    // Find and remove existing hover listeners for this video's parent
    const parentElement = video.parentElement;
    if (parentElement) {
      hoverListeners = hoverListeners.filter((listenerData) => {
        if (listenerData.element === parentElement) {
          parentElement.removeEventListener(
            listenerData.type,
            listenerData.listener
          );
          return false; // Remove from array
        }
        return true; // Keep in array
      });
    }
    // Ensure video is paused before setting up new behavior
    video.pause();

    // --- Setup new state based on current conditions ---
    if (isMobileOrPortrait()) {
      // Mobile/Portrait: Use ScrollTrigger
      // console.log("Setting up ScrollTrigger for video:", video.src);
      const trigger = ScrollTrigger.create({
        trigger: video,
        start: "top bottom-=10%", // Start playing when 10% enters from bottom
        end: "bottom top+=10%", // Stop playing when 10% leaves from top
        onEnter: () => {
          // console.log("ScrollTrigger Enter - Playing:", video.src);
          video
            .play()
            .catch((e) => console.error("Video play failed:", video.src, e));
        },
        onLeave: () => video.pause(), // Pause when scrolling out of view (top)
        onEnterBack: () => {
          // console.log("ScrollTrigger EnterBack - Playing:", video.src);
          video
            .play()
            .catch((e) => console.error("Video play failed:", video.src, e));
        },
        onLeaveBack: () => video.pause(), // Pause when scrolling out of view (bottom)
      });
      videoTriggers.push(trigger);
    } else {
      // Desktop/Landscape: Use Hover
      // console.log("Setting up Hover behavior for video:", video.src);
      if (parentElement) {
        const playOnHover = () =>
          video
            .play()
            .catch((e) => console.error("Hover play failed:", video.src, e));
        const pauseOnLeave = () => video.pause();

        parentElement.addEventListener("mouseenter", playOnHover);
        hoverListeners.push({
          element: parentElement,
          type: "mouseenter",
          listener: playOnHover,
        });

        parentElement.addEventListener("mouseleave", pauseOnLeave);
        hoverListeners.push({
          element: parentElement,
          type: "mouseleave",
          listener: pauseOnLeave,
        });
      }
    }
  };

  onMount(() => {
    const videos =
      document.querySelectorAll<HTMLVideoElement>(".fun-video video");

    // Initial setup for all videos
    videos.forEach((video, index) => {
      video.muted = true; // Ensure video is muted for autoplay policies
      video.playsInline = true; // Important for iOS inline playback
      video.pause(); // Start paused

      // Special case for the third video (index 2)
      if (index === 2) {
        // Use 'loadedmetadata' event to ensure duration is available before setting currentTime
        const handleMetadata = () => {
          if (video.duration >= 4) {
            video.currentTime = 4;
          }
          // Now setup behavior after metadata is loaded and time is set
          setupVideoBehavior(video, index);
          // Refresh triggers *after* setting up this specific video
          ScrollTrigger.refresh();
        };
        // Check if metadata is already loaded (e.g., cached)
        if (video.readyState >= video.HAVE_METADATA) {
          handleMetadata();
        } else {
          video.addEventListener("loadedmetadata", handleMetadata, {
            once: true,
          }); // Ensure listener runs only once
        }
      } else {
        // Setup behavior immediately for other videos
        setupVideoBehavior(video, index);
      }
    });

    // Function to refresh ScrollTrigger instances (used by observer)
    const refreshScrollTriggers = () => {
      // No debounce here, similar to HandleVideos, let ScrollTrigger handle internal throttling if any
      console.log("ResizeObserver triggered, refreshing ScrollTriggers...");
      ScrollTrigger.refresh();
    };

    resizeListener = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        console.log("Window resized, re-evaluating video behavior...");
        videos.forEach((video, index) => {
          setupVideoBehavior(video, index);
        });
        ScrollTrigger.refresh();
        console.log("ScrollTriggers refreshed after resize handler.");
      }, 250); // Debounce resize event
    };

    window.addEventListener("resize", resizeListener);

    // Use ResizeObserver to detect other DOM changes affecting layout
    observer = new ResizeObserver(refreshScrollTriggers);
    // Observe the body for broad layout changes
    observer.observe(document.body);

    // Initial refresh just in case
    ScrollTrigger.refresh();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", resizeListener);
      clearTimeout(resizeTimeout); // Clear any pending resize timeout

      // Disconnect the observer
      if (observer) {
        observer.disconnect();
      }

      // Kill all ScrollTrigger instances
      videoTriggers.forEach((trigger) => trigger.kill());
      videoTriggers = []; // Clear the array

      // Remove all hover event listeners
      hoverListeners.forEach((listenerData) => {
        listenerData.element.removeEventListener(
          listenerData.type,
          listenerData.listener
        );
      });
      hoverListeners = []; // Clear the array

      videos.forEach((video) => {
        video.pause();
      });

      console.log("HandleHomeVideos cleanup complete.");
    };
  });
</script>
