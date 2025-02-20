import Lenis from "lenis";
import { readable } from "svelte/store";

export const lenisController = readable<Lenis | null>(null, (set) => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
        infinite: false,
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