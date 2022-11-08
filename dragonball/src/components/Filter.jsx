import React from 'react'

const Filter = ({setSearch}) => {
    const handleChange = (event) => {
        const {value} = event.target;
        setSearch(value);
    }
  return (
    <div>
        <input type="text" name="nombre" placeholder='Busca personaje' onChange={handleChange}/>
    </div>
  )
}

export default Filter