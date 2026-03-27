import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav>
        <div className="nav-inner">
          <div className="logo">Rishabh<span>.</span></div>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Work</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact" className="nav-cta">Get a Website →</a></li>
          </ul>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Work</a></li>
          <li><a href="#pricing" onClick={closeMenu}>Pricing</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li>
            <a href="#contact" onClick={closeMenu} style={{ color: 'var(--accent)', fontWeight: 700 }}>
              Get a Website →
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
