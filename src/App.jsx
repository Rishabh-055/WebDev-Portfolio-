import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { useLenis } from "./hooks/useLenis";

import LoadingScreen from "./components/ui/LoadingScreen";
import CustomCursor from "./components/layout/CustomCursor";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis smooth scroll (synced with GSAP ScrollTrigger)
  useLenis();

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Custom cursor — hidden on touch devices via CSS */}
      <CustomCursor />

      {/* Main content fades in after loading */}
      <div
        className="bg-[#050508] min-h-screen"
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.6s ease",
          pointerEvents: loading ? "none" : "auto",
        }}
      >
        <Navbar />

        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
