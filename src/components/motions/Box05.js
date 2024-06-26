import React from 'react'
import './Box01.css'
import {motion} from 'framer-motion'

const Box05 = () => {
  return (
    <div>
        <div className='outbox'>
            <motion.div className='box'
                initial={{rotate : 0}}    
                // animate={{rotate : 360}}
                // whileHover={{scale : 1.2}}
                whileTap={{scale : 1.2}}
            >
              scale 05
            </motion.div>
        </div>
    </div>
  )
}

export default Box05