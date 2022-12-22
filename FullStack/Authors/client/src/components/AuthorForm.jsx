import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AuthorForm = (props) => {

  const [name, setName] = useState(props.initialName);

  const handelSubmit = e => {
    e.preventDefault();
    props.handelSubmit({name});
    setName("");
}

  return (
    <div>
      <h1>Favorite authors</h1>
      <p><Link to={"/"}>Home</Link></p>
      <h3>Add a new author:</h3>
      <form onSubmit={handelSubmit}>
        <p>
          <label>Name:</label><br/>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
          {props.errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
        </p>
        <div className='create'>{(window.location.href.indexOf("edit")!== -1)?
          <div><button type="submit"><Link to={"/"}>Cancel</Link></button><input type="submit" value='update' /></div>
          :<div><button type="submit"><Link to={"/"}>Cancel</Link></button><input type="submit" value='create' /></div>}
        </div>
      </form>
    </div>
  )
}

export default AuthorForm