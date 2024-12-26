import React, { useEffect } from 'react';
import '../styles/Projects.css';
import data from '../data/data.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = ({ theme = 'dark' }) => { // default theme is light
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    // Function to import all images from a directory
    const importAll = (r) => {
        let images = {};
        r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    };

    // Import all images from src/assets/images
    const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));


    return (
        <section id="projects" className={`projects-section ${theme}-section`}>
            <h2>Projects</h2>
            <div className="projects-container">
                {data.projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        data-aos="fade-up"
                    >
                        <div className="project-image-wrapper">
                            <img src={images[project.image]} alt={project.title} className="project-image" loading="lazy" />
                            {/* Optional Overlay */}
                            {/* <div className="project-overlay">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="overlay-button">Live Demo</a>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-button">GitHub</a>
                            </div> */}
                        </div>
                        <div className="project-details">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-links">
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        Live Demo
                                    </a>
                                )}
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        GitHub
                                    </a>
                                )}
                            </div>
                            <div className="project-tags">
                                {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="project-tag">{tag}</span>
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
