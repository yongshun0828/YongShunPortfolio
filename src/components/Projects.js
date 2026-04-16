import React from 'react';
import '../styles/Projects.css';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="profile-section">
      <h2 className="section-title">
        <span className="title-icon">💼</span>
        Project Experience
      </h2>
      <div className="projects-timeline">
        {projects.map((project, index) => (
          <div key={index} className="project-timeline-item">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              {index !== projects.length - 1 && <div className="marker-line"></div>}
            </div>
            <div className="project-content">
              <div className="project-header">
                {project.link ? (
                  <a
                    className="project-title project-title-link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                ) : (
                  <h3 className="project-title">{project.title}</h3>
                )}
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

