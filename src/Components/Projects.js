import React from 'react'
import BidMobile from '../Images/Projects-Bid-Mobile.png';
import BidWeb from '../Images/Projects-Bid-Web.png';
import EmailMobile from '../Images/Projects-Email-Mobile.png';
import EmailWeb from '../Images/Projects-Email-Web.png';
import GoogleMobile from '../Images/Projects-Google-Mobile.png';
import GoogleWeb from '../Images/Projects-Google-Web.png';
import ComputerIcon from '../Images/Icon-computer.svg';
import CodeIcon from '../Images/Icon-code.svg';
import BackgroundDetail1 from '../Images/ProjectDetail1.svg';
import BackgroundDetail2 from '../Images/ProjectDetail2.svg';
import BackgroundDetail3 from '../Images/ProjectDetail3.svg';

const Projects = () => {
    return (
        <section className='Projects'>
            <div className="title-container">
                <h2 className="title">Projects</h2>
            </div>

            {/* Project 1 */}
            <div className="project-container">
                <div className="mobile-card">
                    <img src={ BidMobile } alt="Bid Project Mobile" />
                </div>
                <div className="web-card">
                    <img src={ BidWeb } alt="Bid Project Web" />
                </div>
                <div className="cta-card">
                    <div className="project-detail-container">
                        <h2 className="project-title">Auction Commerce</h2>
                        <hr></hr>
                        <p>Django, SQLite, HTML, CSS</p>
                    </div>
                    <div className="project-links-container">
                        <div className="link-container">
                            <img src={ComputerIcon} alt="Project Website" />
                            <p>Site</p>
                        </div>
                        <div className="vl"></div>
                        <div className="link-container">
                            <img src={CodeIcon} alt="Code for Website" />
                            <p>Code</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src={BackgroundDetail2} />
            <img src={BackgroundDetail1} />

            {/* Project 2 */}
            <div className="project-container">
                <div className="mobile-card">
                    <img src={ EmailMobile } alt="Bid Project Mobile" />
                </div>
                <div className="web-card">
                    <img src={ EmailWeb } alt="Bid Project Web" />
                </div>
                <div className="cta-card">
                    <div className="project-detail-container">
                        <h2 className="project-title">JavaScript Email</h2>
                        <hr></hr>
                        <p>JavaScript, Django, SQLite, HTML, CSS</p>
                    </div>
                    <div className="project-links-container">
                        <div className="link-container">
                            <img src={ComputerIcon} alt="Project Website" />
                            <p>Site</p>
                        </div>
                        <div className="vl"></div>
                        <div className="link-container">
                            <img src={CodeIcon} alt="Code for Website" />
                            <p>Code</p>
                        </div>
                    </div>
                </div>
            </div>
           
            <img src={BackgroundDetail3} />

            {/* Project 3 */}
            <div className="project-container">
                <div className="mobile-card">
                    <img src={ GoogleMobile } alt="Bid Project Mobile" />
                </div>
                <div className="web-card">
                    <img src={ GoogleWeb } alt="Bid Project Web" />
                </div>
                <div className="cta-card">
                    <div className="project-detail-container">
                        <h2 className="project-title">Google Search</h2>
                        <hr></hr>
                        <p>HTML, Sass, CSS</p>
                    </div>
                    <div className="project-links-container">
                        <div className="link-container">
                            <img src={ComputerIcon} alt="Project Website" />
                            <p>Site</p>
                        </div>
                        <div className="vl"></div>
                        <div className="link-container">
                            <img src={CodeIcon} alt="Code for Website" />
                            <p>Code</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
