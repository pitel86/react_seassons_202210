import React from 'react'
import Header from './Header'
import "./title.css"

const Title = (props) => {
    console.log(props)
    const {titulo, subtitulo} = props
  return (
    // <div className='title'>
    //     <div>{titulo}</div>
    //     <div>{subtitulo}</div>
    //     <div>{children}</div>
    // </div>
    <>
    <Header text={titulo}></Header>
    <div>Este es mi hijo: {props.children}</div>
    </>
  )
}

export default Title
