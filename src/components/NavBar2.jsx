import React, { useState } from 'react';
import '../styles/NavBar2.css';

const NavBar2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar2">
      <button type="button" className={`nav-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
      <ul className={open ? 'open' : ''}>
        <li><a href="#hero" onClick={() => setOpen(false)}>Accueil</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>À propos</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#work" onClick={() => setOpen(false)}>Expériences</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projets</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar2;
