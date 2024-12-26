// src/components/Contact.jsx

import React, { useEffect } from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import data from '../data/data.json';

const Contact = ({ theme = 'light' }) => { // 'light' or 'dark'
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section id="contact" className={`contact-section ${theme}-section`}>
            <h2>Contact</h2>
            <div className="contact-container">
                <div className="contact-info" data-aos="fade-right">
                    <div className="info-item">
                        <FaEnvelope className="info-icon" />
                        <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
                    </div>
                    <div className="info-item">
                        <FaPhone className="info-icon" />
                        <a href="tel:+1234567890">{data.contact.phone}</a>
                    </div>
                    <div className="info-item">
                        <FaLinkedin className="info-icon" />
                        <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                    <div className="info-item">
                        <FaGithub className="info-icon" />
                        <a href={data.contact.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
