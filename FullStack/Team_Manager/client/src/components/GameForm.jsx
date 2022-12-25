import React, { useState } from 'react'
import axios from 'axios'

const GameForm = () => {

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [nameError, setNameError] = useState("");
  const [errors, setErrors] = useState([]);
  const [messageColor, setMessageColor] = useState("");
  const [validated, setValidated] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/players', { name, position })
    .then((res) => {
      setName('');
      setPosition('');
      console.log(res);
      setErrors([res.data.name+" added successfuly"]);
      setMessageColor("green");
      setValidated(true);
    })
    .catch((err) => {
      const errorResponse = err.response.data.errors;
      const errorArr = [];
      for (const key of Object.keys(errorResponse)) {
        errorArr.push(errorResponse[key].message)
      }
      setMessageColor("red");
      setErrors(errorArr);
    })
  }
  const validateName = (name) => {
    setName(name);
    if (name.length < 2){
      setNameError("Name must be at least 2 characters");
    }
    if (name.length >= 2){
      setNameError("");
    }
    if(name.length<2){
      setValidated(true);
    }
    else{
      setValidated(false);
    }
  }

  return (
  <div className='form'>
    <h1>Add Player</h1>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
        
        <div className='input'>
          <label>Player Name: </label>
          <input type='text' onChange={e => validateName(e.target.value)} value={name} />
        </div>
        <div className='input'>
          <label>Preferred Position: </label>
          <input  type='text' onChange={e => setPosition(e.target.value)} value={position} />
        </div>
        {nameError ?<p style={{color:'red'}}>{ nameError }</p> :''}
        {errors.map((err, index) => <p key={index} style={{color:messageColor}}>{err}</p>)}
        <div className='button'>
          <button disabled={validated}>Add</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default GameForm