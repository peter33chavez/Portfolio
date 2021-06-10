import React from 'react'
import BackgroundDetail from '../Images/header-detail.svg';


const Header = () => {
    return (
        <header>
            <div className="quote-container">
                <h1 className="quote">Sales Manager 
                Turned 
                Developer</h1>
                <p className='about-summary'>Hello, I’m Peter! A Data Driven Developer who brings a Business perspective to develop, with my Companies best interests in mind. </p>
                <button className="resume-btn">Download Resume</button>
            </div>
        </header>
    )
}

export default Header
