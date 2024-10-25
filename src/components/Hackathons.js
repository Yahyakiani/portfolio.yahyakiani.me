import React from 'react';
import '../styles/Hackathons.css';
import data from '../data/data.json';

const Hackathons = () => {
    return (
        <section id="hackathons" className="hackathons-section">
            <h2>Hackathons</h2>
            <div className="hackathons-container">
                {data.hackathons.map((hack, index) => (
                    <div key={index} className="hackathon-card">
                        <h3>{hack.title}</h3>
                        <span className="year">{hack.year}</span>
                        <span className="position">{hack.position}</span>
                        <p>{hack.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hackathons;
