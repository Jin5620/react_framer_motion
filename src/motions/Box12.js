import React, { useState } from 'react'
import './Box12.css'
import {motion} from 'framer-motion'

const Box12 = () => {
  const boxVarients = {
    xPos : {x:[100, -100, 200, -300]}
  }
  const [isMove, setIsMove] = useState(false)
  const [isRotate, setIsRotate] = useState(false)


  return (
    <div>
        <div className='scroll_trigger'>
          <motion.div className='scroll_trigger_box' 
            initial={{opacity: 0, scale: 0}} 
            whileInView={{opacity:1, scale: 1}}
          />
        </div>
        <div className='scroll_trigger'>
          <motion.div className='scroll_trigger_box' 
           initial={{opacity: 0, scale: 0}} 
           whileInView={{opacity:1, scale: 1}}
           viewport={{once: true}}
          />
        </div>
        <div className='scroll_trigger'>
          <motion.div className='scroll_trigger_box' 
           initial={{x: -300}} 
           whileInView={{x: 0}}
           transition={{duration: 2}}
          />
        </div>
        <div className='scroll_trigger'>
          <motion.div className='scroll_trigger_box' 
          initial={{y: 300, opacity: 0}} 
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 2}}
          viewport={{amount: 0.9}}
          />
        </div>
        <div className='scroll_trigger'>
          <motion.div className='scroll_trigger_box' 
          initial={{y: 300, opacity: 0}} 
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 2}}
          />
        </div>
    </div>
  )
}

export default Box12