import React from 'react';
import '../styles/Languages.css';

const Languages = ({ languages }) => {
  return (
    <section id="languages" className="profile-section languages-section">
      <h2 className="section-title">
        <span className="title-icon">🌐</span>
        Languages
      </h2>
      <div className="languages-list">
        {languages.map((language, index) => (
          <div key={index} className="language-item">
            <span className="language-name">{language}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;

