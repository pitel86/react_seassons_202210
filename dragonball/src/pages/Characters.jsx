import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Filter from '../components/Filter'
import Gallery from '../components/Gallery'

const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [charactersFiltered, setCharactersFiltered] = useState([]);

    useEffect(()=>{
        const getCharacters = async() => {
            const pepe = await axios.get("https://dragon-ball-super-api.herokuapp.com/api/characters");
            setCharacters(pepe.data);
            setCharactersFiltered(pepe.data);
        }
        getCharacters()
    },[])

    const searchCharacters = (name) => {
        const filtered = characters.filter((character) => character.name.toLowerCase().includes(name.toLowerCase()));
        setCharactersFiltered(filtered);
    }
    

  return (
    <div>
        <Filter setSearch={searchCharacters}/>
        <Gallery characters={charactersFiltered} />
    </div>
  )
}

export default Characters