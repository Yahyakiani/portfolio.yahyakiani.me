import React from 'react';
import '../styles/Skills.css';
import data from '../data/data.json';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2>Skills</h2>
            <div className="skills-container">
                {data.skills.map((skillCategory, index) => (
                    <div key={index} className="skill-category">
                        <h3>{skillCategory.category}</h3>
                <div className="skills-list">
                    {skillCategory.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
              ))}
                </div>
            </div>
        ))}
          </div>
      </section>
  );
};

export default Skills;