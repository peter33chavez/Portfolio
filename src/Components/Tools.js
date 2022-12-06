import React from 'react'
import PythonIcon from '../Images/Icon-python.svg'
import ReactIcon from '../Images/Icon-react.svg'
import JavaScriptIcon from '../Images/Icon-javascript.svg'
import CIcon from '../Images/Icon-C.svg'
import DjangoIcon from '../Images/Icon-django.svg'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Tools = () => {
    const [ToolIcons, setToolIcons ]= useState([
        {
            id: 1,
            icon: ReactIcon,
            title: 'React',
            active: false,
        },
        {
            id: 2,
            icon: JavaScriptIcon,
            title: 'JavaScript',
            active: false,
        },
        {
            id: 3,
            icon: PythonIcon,
            title: 'Python',
            active: false,
        },
        {
            id: 4,
            icon: DjangoIcon,
            title: 'Django',
            active: false,
        },
        {
            id: 5,
            icon: CIcon,
            title: 'C',
            active: false,
        },
    ])
    const showCard = (id) => {
        setToolIcons(ToolIcons.map((tool) => 
            tool.id === id ? {...tool, active: !tool.active }: tool
            )
        )
    }
    return (
        <section className='tools'>
            <div className="tools-container">
                {ToolIcons.map((tool) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}    
                    
                    key={tool.id} className= { `tool-item ${tool.active ? 'active' : ''}`} onClick={() => 
                        showCard(tool.id)
                    }>
                        <div className="img-card">
                            <img src={tool.icon} alt="Python" />
                        </div>
                        <h4>{tool.title}</h4>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Tools
