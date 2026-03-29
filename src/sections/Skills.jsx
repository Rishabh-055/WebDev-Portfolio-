import { Suspense, lazy, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { skills } from "../utils/skillsData";

const SkillsOrbit = lazy(() => import("../components/three/SkillsOrbit"));

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] },
  },
});

export default function Skills() {
  const [view, setView] = useState("grid"); // 'grid' | 'orbit'

  return (
    <section id="skills" className="relative py-28 md:py-36 bg-[#050508] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/4 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.p
          className="text-xs tracking-[0.4em] uppercase text-cyan-400/70 font-inter mb-4"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Tech Stack
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.h2
            className="text-4xl md:text-6xl font-black font-space-grotesk text-white leading-tight"
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            Tools I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              master.
            </span>
          </motion.h2>

          {/* View toggle */}
          <motion.div
            className="flex gap-2"
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { id: "grid", label: "⊞ Grid" },
              { id: "orbit", label: "◎ 3D Orbit" },
            ].map((v) => (
              <button
                key={v.id}
                onClick={() => setView(v.id)}
                className={`px-4 py-2 rounded-full text-xs font-inter font-medium transition-all duration-300 ${
                  view === v.id
                    ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black"
                    : "border border-white/10 text-white/40 hover:text-white/70"
                }`}
              >
                {v.label}
              </button>
            ))}
          </motion.div>
        </div>

        {view === "orbit" ? (
          /* ── 3D Orbit View ─────────────────────── */
          <motion.div
            className="relative h-[500px] md:h-[600px] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Canvas
              camera={{ position: [0, 2, 7], fov: 60 }}
              gl={{ antialias: true, alpha: true }}
              dpr={[1, 1.5]}
            >
              <Suspense fallback={null}>
                <SkillsOrbit />
              </Suspense>
              <OrbitControls
                enableZoom
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                minDistance={4}
                maxDistance={12}
              />
            </Canvas>

            {/* Legend */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/20 text-xs font-inter">
              Drag to explore · Scroll to zoom
            </p>
          </motion.div>
        ) : (
          /* ── Grid View ─────────────────────────── */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="group relative rounded-xl border border-white/8 bg-[#0d0d14] p-5 flex flex-col items-center gap-3
                           hover:border-opacity-50 transition-all duration-300 cursor-default
                           hover:shadow-[0_0_20px_rgba(0,245,212,0.08)] hover:-translate-y-1"
                style={{
                  "--skill-color": skill.color,
                  "borderColor": "rgba(255,255,255,0.08)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ borderColor: `${skill.color}40` }}
              >
                {/* Color dot */}
                <div
                  className="w-2.5 h-2.5 rounded-full opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}80` }}
                />

                {/* Name */}
                <span className="text-xs font-medium font-inter text-white/50 group-hover:text-white/80 transition-colors text-center leading-tight">
                  {skill.name}
                </span>

                {/* Progress bar */}
                <div className="w-full h-0.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: "easeOut" }}
                  />
                </div>

                {/* Level label */}
                <span
                  className="text-[10px] font-inter opacity-0 group-hover:opacity-60 transition-opacity"
                  style={{ color: skill.color }}
                >
                  {skill.level}%
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
