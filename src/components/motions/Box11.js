import React, { useState } from 'react'
import './Box01.css'
import {motion} from 'framer-motion'

const Box11 = () => {
  const boxVarients = {
    xPos : {x:[100, -100, 200, -300]}
  }
  const [isMove, setIsMove] = useState(false)
  const [isRotate, setIsRotate] = useState(false)


  return (
    <div>
              <motion.div className='box'
                variants={boxVarients}
                animate={{x : isMove ? 100 : 0}}

                onClick={()=>setIsMove(!isMove)}
              >
                stateBox
              </motion.div>
              <motion.div className='box'
                variants={boxVarients}
                animate={{rotate : isRotate ? 45 : 0}}

                onClick={()=>setIsRotate(!isRotate)}
              >
                roateBox
              </motion.div>
    </div>
  )
}

export default Box11