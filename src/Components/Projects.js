import React from 'react'
import ComputerIcon from '../Images/Icon-computer.svg';
import CodeIcon from '../Images/Icon-code.svg';

import BidMobile from '../Images/Projects-Bid-Mobile.png';
import BidWeb from '../Images/Projects-Bid-Web.png';
import EmailMobile from '../Images/Projects-Email-Mobile.png';
import EmailWeb from '../Images/Projects-Email-Web.png';
import GoogleMobile from '../Images/Projects-Google-Mobile.png';
import GoogleWeb from '../Images/Projects-Google-Web.png';


const projects = [
    {
        id: 1,
        title: 'Auction Commerce',
        stacks: 'Django, SQLite, HTML, CSS',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta porro saepe cum. Cumque sunt delectus odio dolorem blanditiis vitae consequuntur.',
        site: 'Null',
        code: 'https://github.com/peter33chavez/commerce-Project2',
        mobile: BidMobile,
        web: BidWeb

    },
    {
        id: 2,
        title: 'JavaScript Email',
        stacks: 'JavaScript, Django, SQLite, HTML, CSS',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta porro saepe cum. Cumque sunt delectus odio dolorem blanditiis vitae consequuntur.',
        site: 'Null',
        code: 'https://github.com/peter33chavez/mail-project3',
        mobile: EmailMobile,
        web: EmailWeb
    },
    {
        id: 3,
        title: 'Google Search',
        stacks: 'HTML, Sass, CSS,',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta porro saepe cum. Cumque sunt delectus odio dolorem blanditiis vitae consequuntur.',
        site: 'https://peter33chavez.github.io/search-project0/',
        code: 'https://github.com/peter33chavez/search-project0',
        mobile: GoogleMobile,
        web: GoogleWeb
    },
]

const Projects = () => {
    return (
        <section className='projects'>
            {projects.map((project) => (
            <div key={project.id} className={`project-container project-${project.id}`}>
                <div className="project-images-container">
                    <div className="mobile-card">
                        <img src={project.mobile} alt="mobile screenshot" />
                    </div>
                    <div className="web-card">
                        <img src={project.web} alt="Web screenshot" />
                    </div>
                </div>
                <div className="cta-card">
                    <div className="cta-details">
                        <div className="project-detail-container">
                            <h2 className="project-title">{project.title}</h2>
                            <hr />
                            <p className='tech-stacks'>{project.stacks}</p>
                            <p className='project-description'>{project.description}</p>
                        </div>
                        <div className="project-links-container">
                            <div className="link-container">
                                <a href="#"><img src={ComputerIcon} alt="Project Website" />
                                <p>Site</p>
                                </a>
                            </div>
                            <div className="vl"></div>
                            <div className="link-container">
                                <a href={project.code}>
                                    <img src={CodeIcon} alt="Code for Website" />
                                    <p>Code</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </section>
    )
}

export default Projects
