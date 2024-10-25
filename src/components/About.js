import React from 'react';
import '../styles/About.css';
import data from '../data/data.json';

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2>About</h2>
            <p>{data.about.content}</p>
        </section>
    );
};

export default About;
