import React from 'react'
import ComputerIcon from '../Images/Icon-computer.svg'
import CodeIcon from '../Images/Icon-code.svg'
import BidMock from '../Images/Main3.png'
import EmailMock from '../Images/Email.png'
import GoogleMock from '../Images/GoogleMock3.png'


const projects = [
    {
        id: 1,
        title: 'Auction Commerce',
        stacks: 'Django, SQLite, HTML, CSS',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta porro saepe cum. Cumque sunt delectus odio dolorem blanditiis vitae consequuntur.',
        site: 'Null',
        code: 'https://github.com/peter33chavez/commerce-Project2',
        mockup: BidMock

    },
    {
        id: 2,
        title: 'JavaScript Email',
        stacks: 'JavaScript, Django, SQLite, HTML, CSS',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta porro saepe cum. Cumque sunt delectus odio dolorem blanditiis vitae consequuntur.',
        site: 'Null',
        code: 'https://github.com/peter33chavez/mail-project3',
        mockup: EmailMock
    },
    {
        id: 3,
        title: 'Google Search',
        stacks: 'HTML, Sass, CSS,',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta porro saepe cum. Cumque sunt delectus odio dolorem blanditiis vitae consequuntur.',
        site: 'https://peter33chavez.github.io/search-project0/',
        code: 'https://github.com/peter33chavez/search-project0',
        web: GoogleMock
    },
]

const Projects = () => {
    return (
        <section className='projects'>
            {projects.map((project) => (
            <div key={project.id} className={`project-container project-${project.id}`}>
                <div className="project-images-container">
                    <div className="mockup-card">
                        <img src={project.mockup} alt="Project Mockup" />
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
