import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = ({ aboutText }) => {
  return (
    <section id="about-me" className="profile-section">
      <h2 className="section-title">
        <span className="title-icon">👋</span>
        About Me
      </h2>
      <div className="section-content">
        <p className="about-text">{aboutText}</p>
      </div>
    </section>
  );
};

export default AboutMe;

