import React from 'react'

import CodeIcon from '../Images/Icon-code.svg'
import ComputerIcon from '../Images/Icon-computer.svg'

const ProjectCard = ({projectData, cardFormat}) => {
  return (
    <div key={projectData.id} className={`project-container project-${projectData.id}`}>
                {projectData.mockupType === "video" ? (
                        <video autoPlay loop muted playsInline className={cardFormat === "mobile" ? "video-card mobile" : "video-card"}>
                            <source src={projectData.mockup} alt="Project Mockup" type='video/mp4' />
                        </video>
                ) : (
                    <div className="project-images-container">
                        <div className="mockup-card">
                            <img src={projectData.mockup} alt="Project Mockup" />
                        </div>
                    </div>
                )}
        <div className={cardFormat === "animation" ? "cta-card animation" : cardFormat === "mobile" ? "cta-card mobile" : "cta-card"}>
            <div className="cta-details">
                <div className="project-detail-container">
                    <h2 className="project-title">{projectData.title}</h2>
                    <p className='project-tools'>{projectData.tools}</p>
                    <p className='project-description'>{projectData.description}</p>
                </div>
                { projectData.code && (<div className="project-links-container">

                    { projectData.site &&(
                        <>
                            <div className="link-container">
                                <a href={projectData.site}><img src={ComputerIcon} alt="Project Website" />
                                <p>Site</p>
                                </a>
                            </div>
                            <div className="vl"></div>
                        </>
                    )}
                    <div className="link-container">
                        <a href={projectData.code}>
                            <img src={CodeIcon} alt="Code for Website" />
                            <p>Code</p>
                        </a>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard