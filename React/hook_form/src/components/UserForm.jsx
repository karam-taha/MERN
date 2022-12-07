import React, { useState } from  'react';
import '../App.css';

const UserForm = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfpassword, setcomfPassword] = useState("");
  
  const createUser = (e) => {
      e.preventDefault();
      const newUser = { firstName, lastName, email, password,comfpassword };
      console.log("Welcome", newUser);
  };

  return(
<div>
  <form onSubmit={ createUser }>
      <div className='input'>
        <label>First Name: </label> 
        <input type="text" onChange={ (e) => setfirstName(e.target.value) } value={firstName} />
      </div>
      <div className='input'>
        <label>Last Name: </label> 
        <input type="text" onChange={ (e) => setlastName(e.target.value) } value={lastName} />
      </div>
      <div className='input'>
        <label>Email Address: </label> 
        <input type="email" onChange={ (e) => setEmail(e.target.value) } value={email} />
      </div>
      <div className='input'>
        <label>Password: </label>
        <input type="password" onChange={ (e) => setPassword(e.target.value) } value={password} />
      </div>
      <div className='input'>
        <label>Confirm Password: </label>
        <input type="password" onChange={ (e) => setcomfPassword(e.target.value) } value={comfpassword} />
      </div>
  </form>
  <div className='display'>
    <h2>Your Form Data</h2>
    <div>
      <p>First Name: {firstName}</p>
      <p>last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>comfirm Password: {comfpassword}</p>
    </div>
  </div>
</div>
  );
};

export default UserForm;