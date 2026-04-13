import React from 'react';
import '../styles/Education.css';

const Education = ({ education }) => {
  return (
    <section id="education" className="profile-section">
      <h2 className="section-title">
        <span className="title-icon">🎓</span>
        Education
      </h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3 className="education-school">{edu.school}</h3>
              <span className="education-period">{edu.period}</span>
            </div>
            {edu.degree && (
              <p className="education-degree">{edu.degree}</p>
            )}
            {edu.degrees && (
              <div className="education-details">
                {edu.degrees.map((degree, degIndex) => (
                  <p key={degIndex} className="education-degree">{degree}</p>
                ))}
              </div>
            )}
            {edu.details && (
              <div className="education-details">
                {edu.details.cgpa && (
                  <span className="education-metric">CGPA: <strong>{edu.details.cgpa}</strong></span>
                )}
                {edu.details.muet && (
                  <span className="education-metric">MUET: <strong>{edu.details.muet}</strong></span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

