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
                    <p>Hello! Peter here, a Frontend Web Developer with years of experience in design.  I've transformed multiple markets with my growth mindset and seamless adaptability to any role. I've always loved software development because it allows my passion for creativity to shine. I bring an idiosyncratic angle to development with my business/analytical mindset, allowing me to have the company's best interests in mind.</p>
                </div>
            </div>
            <img className='about-detail' src={BGdetail} alt="background detail" />
        </section>
    )
}

export default About
