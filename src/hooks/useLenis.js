import { useEffect, useRef } from "react";

/**
 * useLenis — initialises Lenis smooth scroll and syncs with GSAP ScrollTrigger.
 * Returns the Lenis instance so other components can scroll programmatically.
 */
export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Dynamically import to allow code-splitting
    let lenis;
    let rafId;

    const init = async () => {
      const { default: Lenis } = await import("lenis");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { gsap } = await import("gsap");

      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
      });

      lenisRef.current = lenis;

      // Connect Lenis scroll position to GSAP ScrollTrigger
      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    };

    init();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return lenisRef;
}
