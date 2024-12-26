// src/components/Contact.jsx

import React, { useEffect } from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
                        <a href="mailto:your.email@example.com">your.email@example.com</a>
                    </div>
                    <div className="info-item">
                        <FaPhone className="info-icon" />
                        <a href="tel:+1234567890">+1 (234) 567-890</a>
                    </div>
                    <div className="info-item">
                        <FaLinkedin className="info-icon" />
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                    <div className="info-item">
                        <FaGithub className="info-icon" />
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
