import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useMouseParallax } from "../hooks/useMouseParallax";

// Lazy-load the heavy 3D scene
const HeroScene = lazy(() => import("../components/three/HeroScene"));

// Stagger animation for the title characters
const TITLE = "Rishabh";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.3 },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.23, 1, 0.32, 1] },
  }),
};

export default function Hero() {
  const mouse = useMouseParallax(0.5);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-[#050508]"
    >
      {/* Dot grid depth texture */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,245,212,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* ── Three.js Canvas ───────────────────────────────────────── */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{ antialias: true, alpha: false }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <HeroScene mouse={mouse} />
          </Suspense>
        </Canvas>
      </div>

      {/* ── Gradient overlays ─────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/40 via-transparent to-[#050508] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/60 via-transparent to-[#050508]/60 pointer-events-none" />

      {/* ── Text Overlay ─────────────────────────────────────────── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Eyebrow label */}
        <motion.p
          className="mb-6 text-xs md:text-sm tracking-[0.4em] uppercase text-cyan-400/80 font-inter"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          Creative Developer
        </motion.p>

        {/* Animated name */}
        <motion.h1
          className="font-space-grotesk font-black text-[clamp(3.5rem,12vw,9rem)] leading-none tracking-tighter mb-6 select-none"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ perspective: 800 }}
        >
          {TITLE.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={charVariants}
              className="inline-block text-white"
              style={{
                textShadow: "0 0 80px rgba(0,245,212,0.15)",
              }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            variants={charVariants}
            className="inline-block text-cyan-400"
            style={{ textShadow: "0 0 40px rgba(0,245,212,0.6)" }}
          >
            .
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="max-w-md text-white/50 text-base md:text-lg font-inter mb-12 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
        >
          I build{" "}
          <span className="text-white/80">immersive digital experiences</span>{" "}
          — from sleek web apps to 3D interactive worlds.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
        >
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,245,212,0.4)] hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">View Work</span>
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 rounded-full border border-white/20 text-white/70 text-sm font-medium tracking-wide hover:border-cyan-400/60 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-white/20 text-xs tracking-[0.3em] uppercase font-inter">
            Scroll
          </span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-transparent to-cyan-400/60 rounded-full"
            animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
