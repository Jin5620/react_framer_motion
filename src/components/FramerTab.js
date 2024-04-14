import React, { useState } from 'react'
import './FramertTab.css'
import {motion} from 'framer-motion'

const FramerTab = () => {
  const [show, setShow] = useState(1);

  return (
    <div className='framer_tab'>
        <ul>
            {
                [1,2,3].map((li) => 
                    <li onClick={()=>setShow(li)} key={li}
                    className={show === li ? "active" : null}
                    initial={{background : "white"}}
                    animate={{background : show === li ? "black" : "white"}}>
                        btn{li}
                        </li>
                )
            }
        </ul>
        <div className='framer_contents'>
        <ul>
            {
                [1,2,3].map((content) => 
                <motion.div key={content}
                initial={{opacity : 0}}
                animate={{opacity : content === show ? 1 : 0}}
                >
                    {content}. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </motion.div>)
            }
        </ul>
        </div>
    </div>
  )
}

export default FramerTab