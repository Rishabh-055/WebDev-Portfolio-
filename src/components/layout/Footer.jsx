import { motion } from "framer-motion";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Rishabh-055", icon: "GH" },
  { label: "LinkedIn", href: "#", icon: "LI" },
  { label: "Twitter", href: "#", icon: "TW" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#050508] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm font-inter">
          © {new Date().getFullYear()} Rishabh. Crafted with{" "}
          <span className="text-cyan-400">♥</span> and Three.js
        </p>

        <div className="flex items-center gap-6">
          {socialLinks.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-white/30 hover:text-cyan-400 transition-colors duration-300 tracking-widest"
              whileHover={{ y: -2 }}
            >
              {s.label}
            </motion.a>
          ))}
        </div>

        <p className="text-white/20 text-xs font-inter">
          Built with React · Three.js · Framer Motion
        </p>
      </div>
    </footer>
  );
}
