import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const Titles = ({ container, title }) => {
    const {ref, inView} = useInView({
        threshold: 1
    }
    );
    const titleAnimation = useAnimation();
    
      useEffect(() => {
        if(inView){
          titleAnimation.start({
            y: 0,
            opacity: 1,
          });
        }
        if(!inView){
            titleAnimation.start({
                y: -100,
                opacity: 0,  
            });
        }     
      }, [inView]);


    return (
        <div ref={ref} id={title} className={container}>
            <motion.h2 animate={titleAnimation} className="title">{title}</motion.h2>
        </div>
    )
}

export default Titles
