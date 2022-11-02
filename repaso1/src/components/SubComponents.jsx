import React from 'react'
import Square from './Square'

const SubComponents = ({colors}) => {
  return (
    <>
        {colors.map((color, index) => <Square key={index} pepito={color}/>)}
    </>
  )
}

export default SubComponents