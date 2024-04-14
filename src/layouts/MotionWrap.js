import React, { Component } from 'react'
import './MotionWrap.css'
import { motion } from 'framer-motion'

const MotionWrap = (Component, classNames) => HOC => {
    const section = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }


  return (
    <motion.div style={section} className={classNames} id={classNames}
        whileInView={{
            // y: [100, 50, 0],
            opacity: [0, 0, 1],
        }}

        transition={{duration : 0.5}}
        viewport={{amount : 0.5}}
        
    >
        <Component />
    </motion.div>
  )
}

export default MotionWrap