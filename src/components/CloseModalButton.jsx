import React from 'react';
import '../styles/CloseModalButton.css';

const CloseModalButton = ({ onClick }) => (
  <button className="close-modal-btn" onClick={onClick} aria-label="Fermer">
    ×
  </button>
);

export default CloseModalButton;
