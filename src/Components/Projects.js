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
        tools: 'Django, SQLite, HTML, CSS',
        description: 'E-Commerce auction website that utilizes creation of listings, making bid offers, leaving comments, saving to watch list, and searching via category. Login/Register with server/client side validation is also available. ',
        site: 'http://devpeter.pythonanywhere.com',
        code: 'https://github.com/peter33chavez/commerce-Project2',
        mockup: BidMock

    },
    {
        id: 2,
        title: 'JavaScript Email',
        tools: 'JavaScript, Django, SQLite, HTML, CSS',
        description: 'Email Dashboard uses Javascript handling for all routing through Inbox, Compose, Sent, and Archived tabs within the logged-in view. Django is used to handle Customer login validation and API calls.',
        site: 'http://jsemail.pythonanywhere.com/login',
        code: 'https://github.com/peter33chavez/mail-project3',
        mockup: EmailMock
    },
    {
        id: 3,
        title: 'Google Search',
        tools: 'HTML, Sass, CSS,',
        description: 'Design study with a Google clone that supports the standard search engine, advanced search, and image search.',
        site: 'https://peter33chavez.github.io/search-project0/',
        code: 'https://github.com/peter33chavez/search-project0',
        mockup: GoogleMock
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
                            <p className='project-tools'>{project.tools}</p>
                            <p className='project-description'>{project.description}</p>
                        </div>
                        <div className="project-links-container">
                            <div className="link-container">
                                <a href={project.site}><img src={ComputerIcon} alt="Project Website" />
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
