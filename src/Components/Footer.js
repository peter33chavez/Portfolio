import React from 'react'
import Connect from './Connect.js';
import FooterDetail from '../Images/FooterDetail.svg';

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
            <img src={ FooterDetail }/>
        </footer>
    )
}

export default Footer
