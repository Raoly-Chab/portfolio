import React, { useEffect, useState } from 'react';
import '../styles/ScrollButton.css';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <button className="scroll-btn" onClick={scrollToTop} aria-label="Remonter">
      ↑
    </button>
  ) : null;
};

export default ScrollButton;
