import React from 'react'
import illustration from '../Images/illustrationAsset1.svg'
import BGdetail from '../Images/About-detail.svg'

const About = () => {
    return (
        <section className="about">
            <div className='about-container'>
                <div className="illustration-container">
                    <img src={illustration} alt="illustration" />
                </div>
                <div className="about-detail-container">
                    <h2>Peter Chavez</h2>
                    <hr />
                    <p>Hello! Peter here, a Frontend Web Developer with experience in design and Backend Development. I’ve been working in Tech Sales my whole career and made the pivot to the Development field because of my passion for creating. I bring an idiosyncratic angle to development with my business/analytical mindset, which allows me to have the companies best interests in mind.</p>
                </div>
            </div>
            <img className='about-detail' src={BGdetail} alt="background detail" />
        </section>
    )
}

export default About
