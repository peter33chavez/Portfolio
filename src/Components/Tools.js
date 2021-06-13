import React from 'react'
import PythonIcon from '../Images/Icon-python.svg'
import ReactIcon from '../Images/Icon-react.svg'
import JavaScriptIcon from '../Images/Icon-javascript.svg'
import CIcon from '../Images/Icon-C.svg'
import DjangoIcon from '../Images/Icon-django.svg'

const ToolIcons = [
    {
        id: 1,
        icon: PythonIcon,
        title: 'Python',
    },
    {
        id: 2,
        icon: ReactIcon,
        title: 'React',
    },
    {
        id: 3,
        icon: JavaScriptIcon,
        title: 'JavaScript',
    },
    {
        id: 4,
        icon: CIcon,
        title: 'C',
    },
    {
        id: 5,
        icon: DjangoIcon,
        title: 'Django',
    }
]
const Languages = () => {
    return (
        <section className='tools-container'>
            {ToolIcons.map((tool) => (
                <div key={tool.id} className="tool-item">
                    <div className="img-card">
                        <img src={tool.icon} alt="Python" />
                    </div>
                    <h4>{tool.title}</h4>
                </div>
            ))}
        </section>
    )
}

export default Languages
