import React from 'react'
import './Box01.css'
import { motion } from 'framer-motion'

const Box03 = () => {
  return (
    <div>
    <motion.div className='box'
        initial={{y : 100}}
        animate={{y : 0}}
        transition={{duration: 3, delay: 2}}
    >
        Box03
    </motion.div>
    <motion.button className='box'
        initial={{y : 100}}
        animate={{y : 0}}
        transition={{duration: 3, delay: 2}}
    >
        Box04
    </motion.button>
    </div>
  )
}

export default Box03