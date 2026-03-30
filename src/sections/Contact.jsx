import { Suspense, lazy, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";

const ParticleField = lazy(() => import("../components/three/ParticleField"));

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] },
  },
});

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Rishabh-055", color: "#ffffff" },
  { label: "LinkedIn", href: "#", color: "#0A66C2" },
  // { label: "Twitter / X", href: "#", color: "#1DA1F2" },
  { label: "Email", href: "mailto:malviyarishabh494@gmail.com", color: "#00f5d4" },
];

function FloatingLabel({ children, label, ...props }) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const isActive = focused || hasValue;

  const handleChange = (e) => {
    setHasValue(e.target.value.length > 0);
    if (props.onChange) props.onChange(e);
  };

  const Tag = props.as || "input";

  return (
    <div className="relative">
      <motion.label
        className="absolute left-4 font-inter pointer-events-none transition-all duration-300 z-10"
        animate={
          isActive
            ? { top: "8px", fontSize: "10px", color: "rgba(0,245,212,0.8)" }
            : { top: "50%", fontSize: "14px", color: "rgba(255,255,255,0.3)" }
        }
        style={{ translateY: isActive ? "0%" : "-50%" }}
      >
        {label}
      </motion.label>
      <Tag
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={handleChange}
        className={`w-full bg-white/5 border rounded-xl px-4 font-inter text-sm text-white/80 outline-none
                    transition-all duration-300 resize-none
                    ${isActive ? "border-cyan-400/50 bg-white/8 shadow-[0_0_20px_rgba(0,245,212,0.08)]" : "border-white/10"}
                    ${Tag === "textarea" ? "pt-7 pb-3 min-h-[130px]" : "pt-6 pb-2 h-[56px]"}`}
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[#050508] overflow-hidden">

      {/* Three.js particle background */}
      <div className="absolute inset-0 opacity-60">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 70 }}
          gl={{ antialias: false, alpha: true }}
          dpr={[1, 1]}
        >
          <Suspense fallback={null}>
            <ParticleField count={500} />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.p
          className="text-xs tracking-[0.4em] uppercase text-cyan-400/70 font-inter mb-4"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Get In Touch
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-black font-space-grotesk text-white leading-tight mb-4"
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Let's build something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            incredible.
          </span>
        </motion.h2>

        <motion.p
          className="text-white/40 font-inter mb-16 max-w-lg"
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Have a project in mind, want to collaborate, or just say hello?
          I'd love to hear from you.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ── Form ──────────────────────────────────────── */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <FloatingLabel
              label="Your Name"
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <FloatingLabel
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <FloatingLabel
              as="textarea"
              label="Your Message"
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <motion.button
              type="submit"
              disabled={status !== "idle"}
              className="w-full py-4 rounded-xl font-bold font-space-grotesk text-sm tracking-wide relative overflow-hidden
                         bg-gradient-to-r from-cyan-400 to-purple-500 text-black transition-all duration-300
                         hover:shadow-[0_0_40px_rgba(0,245,212,0.3)] disabled:opacity-70"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === "idle" && "Send Message →"}
              {status === "sending" && (
                <span className="flex items-center justify-center gap-3">
                  <motion.span
                    className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full inline-block"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                  Sending...
                </span>
              )}
              {status === "sent" && "✓ Message Sent!"}
            </motion.button>
          </motion.form>

          {/* ── Social & Info ─────────────────────────────── */}
          <motion.div
            className="space-y-10"
            variants={fadeUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <p className="text-white/20 text-xs tracking-widest uppercase font-inter mb-6">Connect</p>
              <div className="space-y-4">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center
                                 group-hover:border-opacity-50 transition-all duration-300"
                      style={{ "--c": s.color }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: s.color }}
                      />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium font-inter group-hover:text-white transition-colors">
                        {s.label}
                      </p>
                    </div>
                    <span className="ml-auto text-white/10 group-hover:text-cyan-400 transition-colors text-lg">→</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="rounded-2xl border border-white/8 bg-[#0d0d14] p-6">
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-green-400 text-xs font-medium font-inter uppercase tracking-widest">
                  Available for work
                </span>
              </div>
              <p className="text-white/40 text-sm font-inter leading-relaxed">
                Currently open to freelance projects, full-time roles, and exciting collaborations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
