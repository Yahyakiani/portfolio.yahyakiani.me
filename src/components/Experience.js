import React from 'react';
import '../styles/Experience.css';
import data from '../data/data.json';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <h2>Experience</h2>
            <div className="timeline">
                {data.experience.map((exp, index) => (
                    <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="content">
                            <h3 className="company-name">{exp.company}</h3>
                            <p className="role">{exp.role}</p>
                            <p className="duration-location">
                                {exp.duration} | {exp.location}
                            </p>
                            <a href={exp.website} target="_blank" rel="noopener noreferrer" className="company-website">
                                Visit Website
                            </a>
                            <ul className="responsibilities">
                                {exp.responsibilities.map((responsibility, rIndex) => (
                                    <li key={rIndex}>{responsibility}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
