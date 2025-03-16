import Lenis from "lenis";
import { readable, writable } from "svelte/store";

export const lenisController = readable<Lenis | null>(null, (set) => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        syncTouch: true,
        syncTouchLerp: 0.025,
        touchInertiaMultiplier: 5,
        touchMultiplier: 2,
        infinite: false,
        lerp: 0.085,
    });

    function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Stop lenis initially
    lenis.stop();

    // Start lenis when document is ready
    lenis.start();

    let resizeTimeout: NodeJS.Timeout;
    function refreshLenis() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            requestAnimationFrame(() => {
                lenis.resize();
            });
        }, 300);
    }

    // Refresh on load and lazy image loads
    window.addEventListener("load", refreshLenis);
    document.querySelectorAll("img[loading='lazy']").forEach((img) => {
        img.addEventListener("load", refreshLenis);
    });

    // Set the store value
    set(lenis);

    // Cleanup
    return () => {
        lenis.destroy();
        set(null);
    };
});
