import React from 'react'
import BackgroundDetail from '../Images/header-detail.svg';


const Header = () => {
    return (
        <header>
            <img src={BackgroundDetail}  alt="background detail" className="background-detail" />
            <div className="quote-container">
                <h1 className="quote">Sales Manager Turned Developer</h1>
                <p className='about-summary'>Hello, I’m Peter! A Data Driven Developer who brings a Business perspective to develop, with my Companies best interests in mind. </p>
            </div>
            <button className="resume-btn">Download Resume</button>
        </header>
    )
}

export default Header
