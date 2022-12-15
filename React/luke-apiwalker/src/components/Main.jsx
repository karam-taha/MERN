import React, {useState} from 'react';
import { navigate } from '@reach/router';

const Main = (props) => {

  const [resource, setResource] = useState('people');
  const [selectedId, setSelectedId] = useState();
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate(`/${resource}/${selectedId}`);
}
  console.log(selectedId)

  return (
    <div>
      <form className='test' onSubmit={handleSubmit}>
        <div className='search'>
          <label>Search for: </label>
          <select onChange={ e=>setResource(e.target.value)}>
          <option value="people">Person</option>
          <option value="planets">Planet</option>
          <option value="films">Film</option>
          <option value="vehicles">Vehicle</option>
          <option value="species">Species</option>
          <option value="starships">StartShip</option>
          </select>
        </div>
        <div className='idnum'>
          <label>ID: </label>
          <input type="number" onChange={ e=>setSelectedId(e.target.value) }/>
        </div>
        <button>Search</button>
      </form>
    </div>
  )
}

export default Main