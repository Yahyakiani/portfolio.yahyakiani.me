import React from 'react';
import '../styles/Home.css';
import data from '../data/data.json';

const Home = () => {
    const { title, subtitle, profileImage } = data.home;

    return (
        <section id="home" className="home-section">
            <div className="home-container">
                <img src={profileImage} alt="Profile" className="profile-image" />
                <div className="home-text">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
            </div>
        </section>
    );
};

export default Home;
