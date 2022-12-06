import React, { useState } from 'react'
import { webProjects, mobileProjects, animationProjects } from '../projectsData'
import ProjectCard from './ProjectCard'



const Projects = () => {
    const [activeProjects, setActiveProjects] = useState(webProjects);
    

    return (
        <section className='projects'>
            <div className='tab-container'>
                <div className="tab-btn-container">
                    <button className={activeProjects === webProjects ? 'tab-btn active' : "tab-btn"} onClick={() => setActiveProjects(webProjects)}>Web Projects</button>
                    <button className={activeProjects === mobileProjects ? 'tab-btn active' : "tab-btn"} onClick={() => setActiveProjects(mobileProjects)}>Mobile Projects</button>
                    <button className={activeProjects === animationProjects ? 'tab-btn active' : "tab-btn"} onClick={() => setActiveProjects(animationProjects)}>3D/Animation Projects</button>
                </div>

            </div>
            {activeProjects.map((project) => (
                <ProjectCard key={project.id} projectData={project} cardFormat={activeProjects === mobileProjects ? "mobile" : activeProjects === animationProjects ? "animation" : "web" } />
            ))}
        </section>
    )
}

export default Projects
