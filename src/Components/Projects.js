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


const projects = [
    {
        id: 1,
        title: 'Auction Commerce',
        stacks: 'Django,SQLite, HTML, CSS',
        site: 'Null',
        code: 'https://github.com/peter33chavez/commerce-Project2',
        Web: BidWeb,
        Mobile: BidMobile,
    },
    {
        id: 2,
        title: 'JavaScript Email',
        stacks: 'JavaScript, Django,SQLite, HTML, CSS',
        site: 'Null',
        code: 'https://github.com/peter33chavez/mail-project3',
        web: EmailWeb,
        mobile: EmailMobile,
    },
    {
        id: 3,
        title: 'Google Search',
        stacks: 'HTML, Sass, CSS,',
        site: 'https://peter33chavez.github.io/search-project0/',
        code: 'https://github.com/peter33chavez/search-project0',
        web: GoogleWeb,
        mobile: GoogleMobile,
    },
]

const Projects = () => {
    return (
        <section className='Projects'>
            <div className="title-container">
                <h2 className="title">Projects</h2>
            </div>

            {projects.map((project) => (
            <div key={project.id} className="project-container">
                <div className="mobile-card">
                    <img src={ project.mobile } alt="" />
                </div>
                <div className="web-card">
                    <img src={ project.web } alt="" />
                </div>
                <div className="cta-card">
                    <div className="project-detail-container">
                        <h2 className="project-title">{project.title}</h2>
                        <hr></hr>
                        <p>{project.stacks}</p>
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
            ))}
            <img src={BackgroundDetail2} alt=''/>
            <img src={BackgroundDetail1} alt=''/>
            <img src={BackgroundDetail3} alt=''/>
        </section>
    )
}

export default Projects
