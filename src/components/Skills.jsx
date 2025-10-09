import React, { useRef, useEffect } from 'react';
import '../styles/Skills.css';
import defaultSkill from '../assets/default-skill.svg';

const skills = [
  { name: 'Python', icon: 'python.png' },
  { name: 'C#', icon: 'CSharpe.png' },
  { name: 'Figma', icon: 'figma.png' },
  { name: 'React', icon: 'react.svg' },
  { name: 'HTML/CSS/JS', icon: 'htmlcssjs.png' },
  { name: 'Linux', icon: 'linux.png' },
  { name: 'Git', icon: 'git.png' },
  { name: 'SQL', icon: 'sql.png' },
  
];

const Skills = () => {
  const carouselRef = useRef(null);
  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;
    const scrollStep = 1;
    const interval = setInterval(() => {
      if (carousel) {
        scrollAmount += scrollStep;
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
          scrollAmount = 0;
        }
        carousel.scrollTo({ left: scrollAmount, behavior: 'auto' });
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Pour boucler visuellement, on duplique les logos
  const loopedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="skills-section">
      <h2>Mes Skills</h2>
      <div className="skills-carousel-wrapper">
        <div className="skills-carousel" ref={carouselRef} style={{ gap: '3.5rem' }}>
          {loopedSkills.map((skill, idx) => (
            <div key={skill.name + idx} className="skill-logo-block">
              <img
                src={skill.icon ? new URL(`../assets/${skill.icon}`, import.meta.url).href : defaultSkill}
                alt={skill.name}
                className="skill-logo"
              />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
