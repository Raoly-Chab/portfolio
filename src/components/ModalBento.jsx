import React from 'react';
import CloseModalButton from './CloseModalButton';
import '../styles/ModalBento.css';

const ModalBento = ({ project, onClose }) => (
  <div className="modal-bento">
    <div className="modal-content modal-flex">
      <CloseModalButton onClick={onClose} />
      <div className="modal-info-block">
        <h2 style={{marginBottom:'0.7rem'}}>{project.name}</h2>
        {project.badges && (
          <div className="badges">
            {project.badges.map(b => <span key={b} className="badge">{b}</span>)}
          </div>
        )}
        {project.goal && <p className="modal-goal"><strong>But :</strong> {project.goal}</p>}
        {project.description && <p className="modal-desc">{project.description}</p>}
        {project.tools && (
          <div className="modal-tools">
            <strong>Langages & Logiciels :</strong> {project.tools.join(', ')}
          </div>
        )}
        {project.source && (
          <a href={project.source} target="_blank" rel="noopener noreferrer" className="source-btn">
            <span style={{display:'inline-flex',alignItems:'center',gap:'0.5rem'}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 5.06 20.17 9.26 21.5C9.86 21.58 10.08 21.22 10.08 20.91C10.08 20.62 10.07 19.89 10.07 19.13C7 19.78 6.34 17.97 6.34 17.97C5.82 16.7 5.03 16.38 5.03 16.38C3.92 15.65 5.12 15.67 5.12 15.67C6.34 15.76 6.97 16.93 6.97 16.93C8.06 18.74 9.81 18.22 10.46 17.92C10.55 17.15 10.84 16.65 11.16 16.38C8.41 16.09 5.53 15.13 5.53 10.81C5.53 9.6 5.97 8.65 6.68 7.92C6.58 7.65 6.19 6.48 6.78 4.97C6.78 4.97 7.68 4.68 10.07 6.23C10.97 5.98 11.93 5.85 12.89 5.85C13.85 5.85 14.81 5.98 15.71 6.23C18.1 4.68 19 4.97 19 4.97C19.59 6.48 19.2 7.65 19.1 7.92C19.81 8.65 20.25 9.6 20.25 10.81C20.25 15.14 17.36 16.09 14.6 16.38C15.01 16.71 15.37 17.36 15.37 18.32C15.37 19.68 15.36 20.58 15.36 20.91C15.36 21.22 15.58 21.59 16.19 21.5C20.39 20.17 23.45 16.42 23.45 12C23.45 6.48 18.97 2 12 2Z" fill="#fff"/></svg>
              Voir sur GitHub
            </span>
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ModalBento;
