import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPath = () => {
  return (
    <div>
      <h2>We're sorry, but we could not find the author you are looking for. 
        Would you like to add this author to our database?</h2>
      <Link to={"/"}>Home</Link>
    </div>
  )
}

export default ErrorPath