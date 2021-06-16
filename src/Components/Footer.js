import React from 'react'
import ConnectForm from './ConnectForm.js';

const Footer = () => {

    const Connect = () => {
        console.log('Clicked');
        //when clicked show ConnectForm.js
    }
    return (
        <footer>
             <ul className="nav-container">
                <li className="nav-item">
                    <a href="#projects" className="link">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="link">About</a>
                </li>
                <li className="nav-item">
                    <p onClick={Connect} className="link">Connect</p>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
