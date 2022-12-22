import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/AuthorForm'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Submit = () => {

  const [authors, setAuthors] = useState([]);
  const [errors, setErrors] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
      axios.get('http://localhost:8000/api/authors')
          .then(res => {
            setAuthors(res.data.Authors);
            console.log(authors)
          })
  }, []);

  const createAuthor = author => {
    axios.post('http://localhost:8000/api/authors', author)
      .then(res => setAuthors([...authors, res.data.author]))
      .catch(err=>{
        const errorResponse = err.response.data.errors;
        console.log(err)
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
            errorArr.push(errorResponse[key].message)
        }
      setErrors(errorArr);
    })
  }
  return (
    <div>
      <AuthorForm handelSubmit={createAuthor } errors = {errors}
      initialName="" />
    </div>
  )
}

export default Submit