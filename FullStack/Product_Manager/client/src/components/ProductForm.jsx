import React, { useState } from 'react'
import axios from 'axios';

const Productform = (props) => {

  const [title, setTitle] = useState(props.initialTitle); 
  const [price, setPrice] = useState(props.initialPrice);
  const [description, setDescription] = useState(props.initialDescription);

  const handelSubmit = e => {
    e.preventDefault();
    props.handelSubmit({title,price,description}); //this comes from the main.js so we dont have to refresh
    setTitle("");
    setPrice("");
    setDescription("");
}

  return (
    <div className='form'>
      <form onSubmit={handelSubmit}>
            <p>
                <label>Title:</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price:</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description:</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <div className='button'><input type="submit" value="create" /></div>
        </form>
    </div>
  )
}

export default Productform