import React from 'react'
import Connect from './Connect.js';

const Footer = () => {
    return (
        <footer>
             <ul className="nav-container">
                <li className="nav-item">
                    <a href="#projects" className="projects-link">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="about-link">About</a>
                </li>
                <li className="nav-item">
                    <a href={Connect} className="connect-link">Connect</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
