import React from 'react'

const Titles = ({ container, title }) => {
    return (
        <div className={container}>
            <h2 className="title">{title}</h2>
        </div>
    )
}

export default Titles
