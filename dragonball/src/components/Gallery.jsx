import React from 'react'
import Character from './Character'

const Gallery = ({characters}) => {
  return (
    <div>
        {characters.map((character) => <Character key={character.id} character={character}/>)}
    </div>
  )
}

export default Gallery