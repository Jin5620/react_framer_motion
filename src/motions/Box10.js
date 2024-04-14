import React from 'react'
import './Box01.css'
import {motion} from 'framer-motion'

const Box10 = () => {
  const boxVarients = {
    xPos : {x:[100, -100, 200, -300]}
  }
  const loadVarients = {
    hidden : {
      x: -50,
      opacity : 0
    },
    visible: {
      x : 0,
      opacity : 1,
      delayChildren : 1

    }
  }


  return (
    <div>
              <motion.div className='box'
                // animate={{x:[100, -100, 200, -300]}}
                variants={boxVarients}
                animate="xPos"
              >
                Box!!!
              </motion.div>
    </div>
  )
}

export default Box10