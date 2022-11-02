import React from 'react'
import Button from './Button'

const Book = ({element, funcion, funcion2}) => {
  return (
    <div>
        <h2>{element.title}</h2>
        <h4>{element.author}</h4>
        {/* <button onClick={funcion2}>click me</button>
        <button onClick={funcion}>erase me</button> */}
        <Button myfunction={funcion2}>click me</Button>
        <Button myfunction={funcion}>erase me</Button>
    </div>
  )
}

export default Book