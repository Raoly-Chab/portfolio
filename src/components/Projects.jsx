import React, { useState } from 'react';
import '../styles/Projects.css';
import ModalBento from './ModalBento';

const projects = [

  {
    name: 'HAVEN Network',
    badges: ['Python', 'flask', 'SQLite', 'raspberry pi'],
    tools: ['flask', 'SQLite', 'raspberry pi'],
    goal: "HAVEN Network est une plateforme de communication locale conçue pour fonctionner sans connexion Internet, hébergée directement sur un Raspberry Pi transformé en point d'accès Wi-Fi.",
    description: "HAVEN Network, une plateforme de communication locale hébergée sur un Raspberry Pi. Le projet visait à créer un système de messagerie et de partage de fichiers accessible via un point d’accès Wi-Fi, sans nécessiter de connexion Internet.",
  },

  {
    name: 'Générateur de billets',
    badges: ['Python', 'Pillow (PIL)', 'qrcode', 'json'],
    tools: ['Python', 'Pillow (PIL)', 'qrcode', 'json'],
    goal: "Générer des billets personnalisés pour des matchs de football à partir de données JSON.",
    description: "J'ai développé un système de génération de billets pour les matchs de football. Le projet consistait à créer un programme Python capable de produire automatiquement des billets personnalisés à partir de données JSON.",
    source: "https://github.com/raoly-koumou/ticket-generator",
  },
  {
    name: 'Jeu du serpent avec IA',
    badges: ['Python', 'Pygame'],
    tools: ['Python', 'Pygame'],
    goal: "Créer un jeu du serpent avec une intelligence artificielle basique avec BFS et le cycle Hamiltonien.",
    description: "Un jeu du serpent codé en Python avec Pygame, incluant une IA pour jouer.",
    source: "https://github.com/Raoly-Chab/projet_py",
  },
  {
    name: 'AniStream',
    badges: ['React', 'Expo'],
    tools: ['React', 'Expo'],
    goal: "Application mobile pour regarder des animés en streaming.",
    description: "Projet d'application mobile React Native pour le streaming d'animés.",
    source: "https://github.com/raoly-koumou/anistream",
  },

  {
    name: 'Puissance 4 avec IA',
    badges: ['Python', 'Pygame'],
    tools: ['Python', 'Pygame'],
    goal: "Recréer le jeu classique du Puissance 4 avec une IA.",
    description: "Un jeu du Puissance 4 codé en Python avec Pygame, incluant une IA pour jouer.",
    source: "https://github.com/Raoly-Chab/puissance4_IA"
  },

  {
    name: 'Modernisation Geronimo Corp.',
    badges: ['Cisco Packet Tracer', 'OpenVPN'],
    tools: ['Cisco Packet Tracer', 'OpenVPN'],
    goal: "Moderniser l'infrastructure réseau d'une entreprise fictive.",
    description: "Simulation de modernisation réseau avec VPN et outils Cisco.",
  },
  {
    name: 'QuickLauncher',
    badges: ['Python', 'webbrowser'],
    tools: ['Python', 'webbrowser'],
    goal: "Lancer rapidement des liens web depuis une interface Python.",
    description: "Petit utilitaire Python pour ouvrir des liens web en un clic via le module webbrowser.",
    source: "https://github.com/raoly-koumou/QuickLauncher",
  },
  {
    name: 'SolidEat',
    badges: ['React', 'Django', 'PostgreSQL'],
    tools: ['React', 'Django', 'PostgreSQL'],
    goal: "Créer une application web de gestion de repas.",
    description: "Développement d'une application web pour planifier et gérer des repas.",
    source: "https://github.com/Raoly-Chab/SolidEat",
  }
];

const Projects = () => {
  const [modal, setModal] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2>Mes Projets</h2>
      <div className="bento-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="bento-card" onClick={() => setModal(proj)}>
            <div className="project-info project-info-vertical">
              <h3>{proj.name}</h3>
              <div className="badges badges-bottom">
                {proj.tools.map(tool => <span key={tool} className="badge">{tool}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
      {modal && <ModalBento project={modal} onClose={() => setModal(null)} />}
    </section>
  );
};

export default Projects;
