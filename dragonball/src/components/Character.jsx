import React from 'react'

const Character = ({character}) => {
  return (
    <div className='character__card'>
        <h3>{character.name}</h3>
        <p>{character.specie}</p>
        <img src={character.imageUrl} alt={character.name} />
    </div>
  )
}

export default Character