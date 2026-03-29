import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CustomCursor — a split-cursor with an outer ring and inner dot.
 * The outer ring follows with spring lag, inner dot snaps instantly.
 * Hidden on touch devices via CSS.
 */
export default function CustomCursor() {
  const outerX = useMotionValue(0);
  const outerY = useMotionValue(0);
  const innerX = useMotionValue(0);
  const innerY = useMotionValue(0);

  // Spring config for outer (lagging) cursor
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const outerSpringX = useSpring(outerX, springConfig);
  const outerSpringY = useSpring(outerY, springConfig);

  const isHoveringRef = useRef(false);
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      outerX.set(x - 20);
      outerY.set(y - 20);
      innerX.set(x - 4);
      innerY.set(y - 4);
    };

    const enter = () => {
      isHoveringRef.current = true;
      if (outerRef.current) outerRef.current.classList.add("cursor-hover");
    };
    const leave = () => {
      isHoveringRef.current = false;
      if (outerRef.current) outerRef.current.classList.remove("cursor-hover");
    };

    window.addEventListener("mousemove", move);

    // Scale up cursor on interactive elements
    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [outerX, outerY, innerX, innerY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={outerRef}
        className="custom-cursor-outer"
        style={{ x: outerSpringX, y: outerSpringY }}
      />
      {/* Inner dot */}
      <motion.div
        ref={innerRef}
        className="custom-cursor-inner"
        style={{ x: innerX, y: innerY }}
      />
    </>
  );
}
