import React, { useState } from 'react';
import '../styles/About.css';
import profilePhoto from '../assets/1.jpg';

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSchoolModal, setShowSchoolModal] = useState(false);
  const [showPassionModal, setShowPassionModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="about-cards-row">
        <div className="about-card about-card-photo" style={{cursor:'pointer', position:'relative'}} onClick={() => setShowModal(true)}>
          <h2 style={{marginBottom:'0.7rem'}}>Moi</h2>
          <img src={profilePhoto} alt="Profil" className="about-photo" />
          <p style={{marginTop:'0.7rem'}}>Passionné d'informatique depuis l'enfance, curieux et créatif.</p>
        </div>
        <div className="about-cards-col">
          <div className="about-card" style={{cursor:'pointer', position:'relative'}} onClick={() => setShowSchoolModal(true)}>
            <p><strong>EPSI Paris</strong></p>
          </div>
          <div className="about-card" style={{cursor:'pointer', position:'relative'}} onClick={() => setShowPassionModal(true)}>
            <p><strong>Mes autres passions</strong></p>
          </div>
          <div className="about-card" style={{cursor:'pointer', position:'relative'}} onClick={() => setShowLocationModal(true)}>
            <p><strong>Localisation</strong></p>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="about-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="about-modal" onClick={e => e.stopPropagation()}>
            <button className="about-modal-close" onClick={() => setShowModal(false)}>×</button>
            <h3 style={{marginBottom:'1rem'}}>Mon histoire</h3>
            <p>Mon aventure avec l'informatique a commencé dès mon plus jeune âge. Tout petit, j'étais fasciné par l'univers numérique. Ce qui n'avait débuté que par de simples parties de jeux vidéo s'est rapidement transformé en une curiosité insatiable : Mais comment ça marche, derrière l'écran ?</p>
          </div>
        </div>
      )}
      {showSchoolModal && (
        <div className="about-modal-overlay" onClick={() => setShowSchoolModal(false)}>
          <div className="about-modal" onClick={e => e.stopPropagation()}>
            <button className="about-modal-close" onClick={() => setShowSchoolModal(false)}>×</button>
            <h3 style={{marginBottom:'1rem'}}>Mon parcours à l'EPSI</h3>
            <p>Actuellement, je poursuis mes études en informatique à l'EPSI Paris, avec l'ambition d'obtenir un master pour approfondir mon expertise et me spécialiser dans ce domaine qui me passionne.</p>
          </div>
        </div>
      )}
      {showPassionModal && (
        <div className="about-modal-overlay" onClick={() => setShowPassionModal(false)}>
          <div className="about-modal" onClick={e => e.stopPropagation()}>
            <button className="about-modal-close" onClick={() => setShowPassionModal(false)}>×</button>
            <h3 style={{marginBottom:'1rem'}}>Mes autres passions</h3>
            <p>Quand je ne suis pas en train de coder, tu peux me trouver en train de jouer aux Echecs, de prendre des photos, d'écouter de la musique ou de jouer au foot avec mes potes. Ces passions m'aident à rester créatif et détendu  et crois-moi, ça sert aussi quand tu dois résoudre un bug compliqué à 2h du mat !</p>
          </div>
        </div>
      )}
      {showLocationModal && (
        <div className="about-modal-overlay" onClick={() => setShowLocationModal(false)}>
          <div className="about-modal" onClick={e => e.stopPropagation()}>
            <button className="about-modal-close" onClick={() => setShowLocationModal(false)}>×</button>
            <h3 style={{marginBottom:'1rem'}}>Localisation</h3>
            <p>Je vis actuellement à Paris, une ville dynamique et inspirante qui me permet de rencontrer des passionnés de technologie et d'élargir mes horizons professionnels et personnels.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
