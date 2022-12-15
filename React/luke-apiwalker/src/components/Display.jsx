import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Display = (props) => {

  const [search, setSearch] = useState('');
  const [responseError, setResponseError] = useState(false);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/${props.category}/${props.id}`)
      // .then( response => console.log(response.data))
      .then( response => setSearch(response.data),setResponseError(false) )
      .catch((err) => {
        setResponseError(true);
      });
    }, [props.category,props.id]);
      
    console.log(search)
    console.log(responseError)
  return (
    <div>
      {responseError ?
      <div>
      <h1>These aren't the droids you're looking for</h1>
      <img src={`${process.env.PUBLIC_URL}/obi.jpg`} />
      </div>
      :
      <div>
        {search.hasOwnProperty('height') &&
      <div>
        <h2>Name: {search.name}</h2>
        <p>Height: {search.height}</p>
        <p>Mass: {search.mass}</p>
        <p>Hair Color: {search.hair_color}</p>
        <p>Skin Color: {search.skin_color }</p>
        {/* <p>Homeworld: {search.homeworld}</p> */}
        {console.log(search.homeworld)}
      </div>
      }
      {search.hasOwnProperty('climate') &&
      <div>
        <h2>Name: {search.name}</h2>
        <p>Climate: {search.climate}</p>
        <p>Terrain: {search.terrain}</p>
        <p>Surface Water: {search.surface_water}</p>
        <p>Population: {search.population}</p>
      </div>
      }
      {search.hasOwnProperty('title') &&
      <div>
        <h2>Title: {search.title}</h2>
        <p>Episode: {search.episode_id}</p>
        <p>Director: {search.director}</p>
        <p>Producer: {search.producer}</p>
        <p>Release Date: {search.release_date}</p>
      </div>
      }
      {search.hasOwnProperty('vehicle_class') &&
      <div>
        <h2>Name: {search.name}</h2>
        <p>Model: {search.model}</p>
        <p>Manufacturer: {search.manufacturer}</p>
        <p>Cost: {search.cost_in_credits}</p>
        <p>Passengers: {search.passengers}</p>
      </div>
      }
      {search.hasOwnProperty('classification') &&
      <div>
        <h2>Name: {search.name}</h2>
        <p>Classification: {search.classification}</p>
        <p>Designation: {search.designation}</p>
        <p>Average Height: {search.average_height}</p>
        <p>Skin Color: {search.skin_colors}</p>
        <p>Hair Color: {search.hair_colors}</p>
        <p>Eye Color: {search.eye_colors}</p>
      </div>
      }
      {search.hasOwnProperty('starship_class') &&
      <div>
        <h2>Name: {search.name}</h2>
        <p>Model: {search.model}</p>
        <p>Manufacturer: {search.manufacturer}</p>
        <p>Cost: {search.cost_in_credits}</p>
        <p>Passengers: {search.passengers}</p>
      </div>
      }
      </div>
      }
    </div>
  )
}

export default Display