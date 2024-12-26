// src/components/ResearchPapers.jsx

import React, { useEffect } from 'react';
import '../styles/ResearchPapers.css';
import data from '../data/data.json'; // Ensure your research papers are listed here
import AOS from 'aos';
import 'aos/dist/aos.css';

const ResearchPapers = ({ theme = 'dark' }) => { // 'light' or 'dark'
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <section id="research-papers" className={`research-section ${theme}-section`}>
            <h2>Research Papers</h2>
            <div className="research-container">
                {data.researchPapers.map((paper, index) => (
                    <div
                        key={index}
                        className="research-card"
                        data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} // Alternating animations
                    >
                        <div className="paper-details">
                            <h3 className="paper-title">{paper.title}</h3>
                            <p className="paper-authors"><strong>Authors:</strong> {paper.authors.join(', ')}</p>
                            <p className="paper-info"><strong>Year:</strong> {paper.year} | <strong>Venue:</strong> {paper.venue}</p>
                            <p className="paper-description">{paper.description}</p>
                            {paper.link && (
                                <a href={paper.link} target="_blank" rel="noopener noreferrer" className="paper-link">
                                    Read Paper
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ResearchPapers;
