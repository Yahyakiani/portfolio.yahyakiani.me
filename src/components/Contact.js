import React from 'react';
import '../styles/Contact.css';
import data from '../data/data.json';

const Contact = () => {
    const { email, linkedin, github } = data.contact;

    return (
        <section id="contact" className="contact-section">
            <h2>Contact</h2>
            <div className="contact-container">
                <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
                <p>LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>
                <p>GitHub: <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></p>
            </div>
        </section>
    );
};

export default Contact;
