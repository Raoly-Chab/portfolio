import React from 'react';
import '../styles/GithubButton.css';

const GithubButton = ({ url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="github-btn">
    <span>GitHub</span>
  </a>
);

export default GithubButton;
