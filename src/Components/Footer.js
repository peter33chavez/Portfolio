import React from 'react'

const Footer = (showForm) => {

    const Connect = () => {
        console.log('Clicked');
        //when clicked show ConnectForm.js
    }
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
                    <a href='#' onClick={showForm} className='link'>Connect</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
