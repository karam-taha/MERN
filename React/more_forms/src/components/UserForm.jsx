import React, { useState } from  'react';
import '../App.css';

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [firstNameMsg, setFirstNameMsg] = useState(false);
  const [lastNameMsg, setLastNameMsg] = useState(false);
  const [emailMsg, setEmailMsg] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState(false);
  const [confirmPasswordMsg, setConfirmPasswordMsg] = useState(false);

  const firstErr = "First name has to be at least 2 characters!";
  const lastErr = "Last name has to be at least 2 characters!";
  const emailErr = "Email name has to be at least 5 characters!";
  const passwordErr = "Password name has to be at least 8 characters!";
  const confirmErr = "Passwords do not match!";

  const handleFirst = (e) => {
    setFirstName(e.target.value);
        if(e.target.value.length<2){
            setFirstNameMsg(<span style={{ color: "red", fontSize: "15px"  }}>{firstErr}</span>);
        }
        else {
            setFirstNameMsg(<></>);
        }
        if(e.target.value.length===0){
            setFirstNameMsg(<></>);
        }
}

const handleLast = (e) => {
  setLastName(e.target.value);
  if(e.target.value.length<2){
      setLastNameMsg(<span style={{ color: "red", fontSize: "15px"  }}>{lastErr}</span>);
  }
  else {
      setLastNameMsg(<></>);
  }
  if(e.target.value.length===0){
      setLastNameMsg(<></>);
  }
}

const handleEmail = (e) => {
  setEmail(e.target.value);
  if(e.target.value.length<5){
      setEmailMsg(<span style={{ color: "red", fontSize: "15px"  }}>{emailErr}</span>);
  }
  else {
      setEmailMsg(<></>);
  }
  if(e.target.value.length===0){
      setEmailMsg(<></>);
  }
}

const handlePassword = (e) => {
  setPassword(e.target.value);
  if(e.target.value.length<8){
      setPasswordMsg(<span style={{ color: "red", fontSize: "15px"  }}>{passwordErr}</span>)
  }
  else {
      setPasswordMsg(<></>);
  }
  if(e.target.value.length===0){
      setPasswordMsg(<></>);
  }
}

const handleConfirm = (e) => {
  setConfirm(e.target.value);
  if(e.target.value!==password){
      setConfirmPasswordMsg(<span style={{ color: "red", fontSize: "15px"  }}>{confirmErr}</span>);
  }
  else {
      setConfirmPasswordMsg(<></>);
  }
  if(e.target.value.length===0){
      setConfirmPasswordMsg(<></>);
  }
}

  return(
<div>
  <form>
      <div className='input'>
        <label>First Name: </label> 
        <input onChange={handleFirst} name="firstName" type="text" value={firstName}></input>
      </div>
      {firstNameMsg}
      <div className='input'>
        <label>Last Name: </label> 
        <input onChange={handleLast} name="lastName" type="text" value={lastName}></input>
      </div>
      {lastNameMsg}
      <div className='input'>
        <label>Email: </label> 
        <input onChange={handleEmail} name="email" type="text" value={email}></input>
      </div>
      {emailMsg}
      <div className='input'>
        <label>Password: </label>
        <input onChange={handlePassword} name="password" type="password" value={password}></input>
      </div>
      {passwordMsg}
      <div className='input'>
        <label>Confirm Password: </label>
        <input onChange={handleConfirm} name="confirmPassword" type="password" value={confirm}></input>
      </div>
      {confirmPasswordMsg}
  </form>
</div>
  );
};

export default UserForm;