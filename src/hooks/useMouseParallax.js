import { useEffect, useState } from "react";

/**
 * useMouseParallax — returns normalised mouse position {x, y} in range [-0.5, 0.5]
 * Used to drive camera/parallax effects across the page.
 */
export function useMouseParallax(strength = 1) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = ((e.clientX / window.innerWidth) - 0.5) * strength;
      const y = ((e.clientY / window.innerHeight) - 0.5) * strength;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [strength]);

  return mouse;
}
