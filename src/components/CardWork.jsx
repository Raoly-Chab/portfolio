import React from 'react';
import '../styles/CardWork.css';
import cityNeedLogo from '../assets/CityNeed.png';

const experiences = [
  {
    title: 'Stagiaire en Ingénieur Développement',
    company: 'CITY-NEED',
    logo: 'cityneed.png',
    date: '15 semaines',
  },
];

const CardWork = () => (
  <section id="work" className="work-section">
    <h2>Expériences Professionnelles</h2>
    <div className="work-cards">
      {experiences.map((exp, idx) => (
        <div key={idx} className="work-card work-card-center">
          <h3>{exp.title}</h3>
          <h4>{exp.company}</h4>
          <img src={cityNeedLogo} alt={exp.company} className="work-logo-large" />
          <span className="work-date">{exp.date}</span>
        </div>
      ))}
    </div>
  </section>
);

export default CardWork;
