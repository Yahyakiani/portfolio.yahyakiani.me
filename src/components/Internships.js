import React from 'react';
import '../styles/Internships.css';
import data from '../data/data.json';

const Internships = () => {
    return (
        <section id="internships" className="internships-section">
            <h2>Internships</h2>
            <div className="internships-container">
                {data.internships.map((internship, index) => (
                    <div key={index} className="internship-card">
                        <h3>{internship.role} at {internship.company}</h3>
                        <span className="duration">{internship.duration}</span>
                        <p>{internship.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Internships;
