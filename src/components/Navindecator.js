import React from 'react'
import './Navindecator.css'

const Navindecator = () => {
    const nav = ["header", "work", "skills", "aboutme"]
  return (
    <ul className='Nav'>
        {
        nav.map(menu=>
            <li><a href={`#${menu}`}>{menu}</a></li>
        )
        }
    </ul>
  )
}

export default Navindecator