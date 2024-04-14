import React from 'react'
import './Box01.css'
import {motion} from 'framer-motion'

const Box09 = () => {
  const boxVarients = {
    visible: {
      transition : {
        delay: 2,
        when: "beforeChildren"
        // staggerChildrens
      }
    }
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
        <div className='flexOutbox'
          variants={boxVarients}
        >
           {
            [1,2,3].map(box =>
              <motion.div className='box'
                key={box}
                // initial={{scale: 0.2}}
                initial="hidden"
                variants={loadVarients}
                animate="visible"
              >
                Box!!!
              </motion.div>
            )
           }
        </div>
    </div>
  )
}

export default Box09