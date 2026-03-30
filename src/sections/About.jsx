import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";

const ProfileImage3D = lazy(() => import("../components/three/ProfileImage3D"));

const skills = [
  "React", "Next.js", "Three.js", "TypeScript",
  "Node.js", "MongoDB", "GSAP", "Framer Motion",
  "Tailwind CSS", "Figma", "Docker", "PostgreSQL",
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] },
  },
});

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#050508] overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          className="text-xs tracking-[0.4em] uppercase text-cyan-400/70 font-inter mb-4"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          About Me
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Text ─────────────────────────────────────── */}
          <div>
            <motion.h2
              className="text-4xl md:text-6xl font-black font-space-grotesk text-white leading-tight mb-8"
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              Crafting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                digital
              </span>{" "}
              experiences that feel alive.
            </motion.h2>

            <motion.p
              className="text-white/50 text-base md:text-lg font-inter leading-relaxed mb-6"
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              I'm <strong className="text-white/80">Rishabh</strong> — a full-stack developer and
              creative technologist based in India. I specialise in building high-performance web
              applications and immersive 3D experiences that bridge the gap between design and engineering.
            </motion.p>

            <motion.p
              className="text-white/40 text-base font-inter leading-relaxed mb-10"
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              With 3+ years of experience, I've shipped products for local businesses, startups, and
              global clients — always pushing for pixel-perfect results and buttery-smooth interactions.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mb-10"
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                { value: "3+", label: "Years Exp." },
                { value: "20+", label: "Projects" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-black font-space-grotesk text-cyan-400">{stat.value}</p>
                  <p className="text-white/30 text-xs font-inter mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Skill pills */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={fadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1.5 rounded-full border border-white/10 text-white/50 text-xs font-inter
                             hover:border-cyan-400/40 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.04, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: 3D Blob Canvas ─────────────────────────── */}
          <motion.div
            className="relative h-[400px] md:h-[520px] w-full"
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Glow behind canvas */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-cyan-400/10 blur-[60px]" />
            </div>

            <Canvas
              camera={{ position: [0, 0, 4], fov: 50 }}
              gl={{ antialias: true, alpha: true }}
              dpr={[1, 1.5]}
            >
              <Suspense fallback={null}>
                <ProfileImage3D />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
