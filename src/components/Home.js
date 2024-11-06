import React from 'react';
import '../styles/Home.css';
import data from '../data/data.json';
import profileImage from '../assets/images/yahya.jpg';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

const Home = () => {
    const { title, subtitle } = data.home;

    return (
        <section id="home" className="home-section">
            <div className="home-container">
                <img src={profileImage} alt="Profile" className="profile-image" />
                <div className="home-text">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <div className="social-icons">
                        <a href="https://github.com/Yahyakiani" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>

                        <a href="https://www.linkedin.com/in/yahya-kayani/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:yahyakiani1@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                            <FaEnvelope />
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;