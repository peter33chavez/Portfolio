import React from 'react'

const Footer = ({showForm}) => {
    return (
        <footer>
             <ul className="nav-container">
                <li className="nav-item">
                    <a href="#Projects" className="link">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="link">About</a>
                </li>
                <li className="nav-item">
                    <button onClick={showForm} className='connect-btn'>Connect</button>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
