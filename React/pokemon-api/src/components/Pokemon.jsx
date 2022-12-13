import React, {useState} from 'react'

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([])
  
  const handlefetch = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPokemon(response.results);
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