import React from 'react'
// import '../index.css'

const SectionTemp = ({children}) => {
    const section = {
        height: "100vh"
    }


  return (
    <div style={section}>
        {children}
    </div>
  )
}

export default SectionTemp