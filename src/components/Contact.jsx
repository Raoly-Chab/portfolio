import React from "react";
import "../styles/Contact.css";
import githubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.svg";
import mailLogo from "../assets/mail.svg";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact</h2>
      <div className="contact-links">
        <a
          href="https://github.com/Raoly-Chab"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <img src={githubLogo} alt="GitHub" className="contact-icon" />
          <span className="contact-name">raoly-koumou</span>
        </a>
        <a href="mailto:raoly.koumou@gmail.com" className="contact-link">
          <img src={mailLogo} alt="Mail" className="contact-icon" />
          <span className="contact-name">raoly.koumou@gmail.com</span>
        </a>
        <a
          href="https://www.linkedin.com/in/raoly-koumou/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <img src={linkedinLogo} alt="LinkedIn" className="contact-icon" />
          <span className="contact-name">LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
