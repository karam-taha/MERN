import React, {useState} from 'react'
import axios from "axios";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([])
  
  const handlefetch = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response) => {
      setPokemon(response.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  console.log(pokemon)

  return (
    <div>
      <button onClick={handlefetch}>fetch pokemon</button>
      <div className='list'>
        {pokemon.map( (e) => (<li>{e.name}</li>))}
      </div>
    </div>
  )
}

export default Pokemon