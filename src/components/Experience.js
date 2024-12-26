import React from 'react';
import '../styles/Experience.css';
import data from '../data/data.json';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <h2>Experience</h2>
            <div className="experience-container">
                {data.experience.map((exp, index) => (
              <div key={index} className="experience-item">
                  <div className="experience-content">
                      <h3 className="company-name">{exp.company}</h3>
                      <p className="role">{exp.role}</p>
                      <p className="duration">{exp.duration}</p>
                      <p className="location">{exp.location}</p>
                      <a href={exp.website} target="_blank" rel="noopener noreferrer" className="company-website">
                          {exp.website}
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
