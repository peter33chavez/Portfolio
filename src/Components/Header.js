import React from 'react'
import { motion } from 'framer-motion'
import resume from '../Docs/Resume.pdf'


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
                
                className="quote">UI/UX
                Developer</motion.h1>
                <motion.p
                    variants={fadeLeft}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 2}}
                className='about-summary'>I’m an innovative professional who brings a dynamic  perspective to the forefront. This allows me to produce unique yet efficient outcomes. </motion.p>
                <motion.a
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 3}}
                 className="resume-btn" href={ resume }
                 download='Peter-Chavez-Resume'>Download Resume</motion.a>
            </div>
        </header>
    )
}

export default Header
