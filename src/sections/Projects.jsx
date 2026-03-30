import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories } from "../utils/projectData";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] },
  },
});

/** 3D tilt card on mouse hover */
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -12;
    const rotateY = ((x - cx) / cx) * 12;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-2xl border border-white/8 bg-[#0d0d14] overflow-hidden
                   transition-all duration-300 ease-out cursor-pointer
                   hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(0,245,212,0.08)]"
        style={{ transition: "transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease" }}
      >
        {/* Preview area */}
        <div
          className="h-48 relative overflow-hidden bg-[#0a0a0f]"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
          )}

          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

          {/* Animated grid overlay */}
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage: `linear-gradient(${project.accent}20 1px, transparent 1px), linear-gradient(90deg, ${project.accent}20 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />

          {/* Project number */}
          <span
            className="absolute top-4 right-4 text-5xl font-black font-space-grotesk opacity-30"
            style={{ color: "#ffffff" }}
          >
            {String(project.id).padStart(2, "0")}
          </span>

          {/* Glow circle */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none mix-blend-screen"
          >
            <div
              className="w-32 h-32 rounded-full blur-[40px]"
              style={{ backgroundColor: `${project.accent}60` }}
            />
          </div>

          {/* Top badge */}
          <span
            className="absolute top-4 left-4 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest backdrop-blur-md"
            style={{
              backgroundColor: `${project.accent}30`,
              color: "#ffffff",
              border: `1px solid ${project.accent}50`,
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold font-space-grotesk text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-white/40 text-sm font-inter leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded text-[11px] font-inter text-white/40 bg-white/5 border border-white/8"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              className="flex items-center gap-1.5 text-xs font-medium text-white/50 hover:text-cyan-400 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="w-4 h-px bg-current" />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              className="flex items-center gap-1.5 text-xs font-medium text-white/50 hover:text-purple-400 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="w-4 h-px bg-current" />
              GitHub
            </a>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-28 md:py-36 bg-[#050508] overflow-hidden">

      {/* Ambient blobs */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-cyan-400/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.p
          className="text-xs tracking-[0.4em] uppercase text-cyan-400/70 font-inter mb-4"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Selected Work
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <motion.h2
            className="text-4xl md:text-6xl font-black font-space-grotesk text-white leading-tight"
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            Projects that
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              push limits.
            </span>
          </motion.h2>

          {/* Category filter */}
          <motion.div
            className="flex gap-2 flex-wrap"
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium font-inter capitalize transition-all duration-300 ${activeCategory === cat
                    ? "text-black bg-gradient-to-r from-cyan-400 to-purple-500"
                    : "text-white/40 border border-white/10 hover:border-white/30 hover:text-white/70"
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
