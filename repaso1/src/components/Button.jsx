import React from 'react'
import "./Buttons.css"

const Button = ({myfunction, children}) => {
  return (
    <span className='button' onClick={myfunction}>{children}</span>
  )
}

export default Button