import React from 'react';
import '../styles/Experience.css';
import data from '../data/data.json';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <h2>Experience</h2>
            <div className="experience-container">
                {data.experience.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <h3>{exp.role} at {exp.company}</h3>
                        <span className="duration">{exp.duration}</span>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
