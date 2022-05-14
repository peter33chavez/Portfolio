import React from 'react'
import ComputerIcon from '../Images/Icon-computer.svg'
import CodeIcon from '../Images/Icon-code.svg'
import MarketPlace from '../Images/MarketPlace.gif'
import BidMock from '../Images/AuctionSite.gif'
import EmailMock from '../Images/JavaScriptEmail.gif'
import Rootbound from '../Images/rootbound.gif'
import RicomaMock from '../Images/ricomaMock.gif'


const projects = [
    {
        id: 1,
        title: 'Market Place',
        tools: 'React, TypeScript',
        description: "This exercise is to show some JavaScript/TypeScript and the React framework in a real world setting. The goal was to create a mock-up of a generic marketplace page using an API.",
        code: 'https://github.com/peter33chavez/mock-item-card',
        mockup: MarketPlace

    },
    {
        id: 2,
        title: 'Rootbound',
        tools: 'React, Redux, Node.js, Next.js, Firebase',
        description: "Rootbound is the Hybrid E-Commerce Shop that I started back in 2020. The website utilizes techniques like lazy loading, SDKs, WebHooks, and database manipulation to provide the best user experience.",
        mockup: Rootbound

    },
    {
        id: 3,
        title: 'Ricoma Mock Website',
        tools: 'React, Redux, Styled-Components',
        description: "For this project I have implemented a e-Commerce shop with Redux",
        code: 'https://github.com/peter33chavez/Ricoma-Mock',
        mockup: RicomaMock

    },
    {
        id: 4,
        title: 'Auction Commerce',
        tools: 'Django, SQLite, HTML, CSS',
        description: 'E-Commerce auction website that utilizes creation of listings, making bid offers, leaving comments, saving to watch list, and searching via category. Login/Register with server/client side validation is also available. ',
        site: 'http://devpeter.pythonanywhere.com',
        code: 'https://github.com/peter33chavez/commerce-Project2',
        mockup: BidMock

    },
    {
        id: 5,
        title: 'JavaScript Email',
        tools: 'JavaScript, Django, SQLite, HTML, CSS',
        description: 'Email Dashboard uses Javascript handling for all routing through Inbox, Compose, Sent, and Archived tabs within the logged-in view. Django is used to handle Customer login validation and API calls.',
        site: 'http://jsemail.pythonanywhere.com/login',
        code: 'https://github.com/peter33chavez/mail-project3',
        mockup: EmailMock
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
                        { project.code && (<div className="project-links-container">

                            { project.site &&(
                                <>
                                    <div className="link-container">
                                        <a href={project.site}><img src={ComputerIcon} alt="Project Website" />
                                        <p>Site</p>
                                        </a>
                                    </div>
                                    <div className="vl"></div>
                                </>
                            )}
                            <div className="link-container">
                                <a href={project.code}>
                                    <img src={CodeIcon} alt="Code for Website" />
                                    <p>Code</p>
                                </a>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
            ))}
        </section>
    )
}

export default Projects
