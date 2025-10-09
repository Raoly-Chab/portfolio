import React from 'react';
import '../styles/Hero.css';

import DownloadButton from './DownloadButton';

const Hero = () => (
  <section id="hero" className="hero-section">
    <h1>Hello, Je suis Raoly KOUMOU</h1>
    <h2>Je suis un jeune développeur actuellement en recherche d'une alternance</h2>
    <div className="hero-animation" />
    <DownloadButton />
  </section>
);

export default Hero;
