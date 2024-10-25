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
                        <h3>{project.title}</h3>
                        <span className="year">{project.year}</span>
                        <span className="tags">{project.tags.join(', ')}</span>
                        <p>{project.description}</p>
                        <div className="project-details">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                            <p className="languages">Languages: {project.languages.join(', ')}</p>
                            <p className="tools">Tools: {project.tools.join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;