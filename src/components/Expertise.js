import React from 'react';
import '../styles/Expertise.css';

const Expertise = ({ expertise }) => {
  return (
    <section id="expertise" className="profile-section skills-section">
      <h2 className="section-title">
        <span className="title-icon">🛠️</span>
        Expertise
      </h2>
      <div className="skills-grid">
        {expertise.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-name">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;

