import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#internships">Internships</a></li>
                <li><a href="#hackathons">Hackathons</a></li>
                <li><a href="#research-papers">Research</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
