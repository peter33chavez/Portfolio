import React from 'react'
import { motion } from 'framer-motion'


const Header = () => {
    const fadeLeft = {
        hidden: { opacity: 0, x: -100},
        visible: { opacity: 1, x: 0}
    };
    return (
        <header>
            <div className="quote-container">
                <motion.h1 
                    variants={fadeLeft}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 1}}
                
                className="quote">Sales Manager 
                Turned 
                Developer</motion.h1>
                <motion.p
                    variants={fadeLeft}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 2}}
                className='about-summary'>Hello, I’m Peter! A Data Driven Developer who brings a Business perspective to the Community, with my Companies best interests in mind. </motion.p>
                <motion.button
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 3}}
                 className="resume-btn">Download Resume</motion.button>
            </div>
        </header>
    )
}

export default Header
