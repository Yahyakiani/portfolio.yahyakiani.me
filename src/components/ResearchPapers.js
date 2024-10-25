import React from 'react';
import '../styles/ResearchPapers.css';
import data from '../data/data.json';

const ResearchPapers = () => {
    return (
        <section id="research-papers" className="research-section">
            <h2>Research Papers Published</h2>
            <div className="research-container">
                {data.researchPapers.map((paper, index) => (
                    <div key={index} className="research-card">
                        <h3>{paper.title}</h3>
                        <span className="publication">{paper.publication}</span>
                        <span className="year">{paper.year}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ResearchPapers;
