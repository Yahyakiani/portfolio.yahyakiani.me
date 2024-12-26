import React from 'react';
import '../styles/Projects.css';
import data from '../data/data.json';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="projects-container">
                {data.projects.map((project, index) => (
                    <div key={index} className="project-card">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-details">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                              View Project
                          </a>
                      )}
                      {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                              GitHub Repository
                          </a>
                      )}
                      <div className="project-tags">
                          {project.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="tag-item">{tag}</span>
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