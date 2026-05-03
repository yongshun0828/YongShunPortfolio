import React from 'react';
import '../styles/Experience.css';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="profile-section">
      <h2 className="section-title">
        <span className="title-icon">🏢</span>
        Work Experience
      </h2>
      <div className="experience-timeline">
        {experience.map((job, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-title-block">
                <h3 className="experience-company">{job.company}</h3>
                <p className="experience-role">{job.role}</p>
              </div>
              <span className="experience-period">{job.period}</span>
            </div>
            {job.location && (
              <p className="experience-location">{job.location}</p>
            )}
            {job.highlights && job.highlights.length > 0 && (
              <ul className="experience-highlights">
                {job.highlights.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            )}
            {job.summary && !job.highlights && (
              <p className="experience-summary">{job.summary}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
