import React, { useState } from 'react'
import axios from 'axios';

const Productform = () => {

  const [title, setTitle] = useState(""); 
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const onSubmitHandler = e => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new person
    axios.post('http://localhost:8000/api/product', {
      title,
      price,
      description
    })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
}

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Productform