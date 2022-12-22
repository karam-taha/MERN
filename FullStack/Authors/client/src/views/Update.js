import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'

const Update = (props) => {
  const { id } = useParams();
  const [author, setAuthor] = useState({});
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]); 

  useEffect(() => {
      axios.get('http://localhost:8000/api/authors/'+id)
          .then(res => {
            setAuthor(res.data.Author);
              setLoaded(true);
          })
          .catch((error) => {
            navigate("/error")
          });
  }, [])

  const updateAuthor = author => {
    axios.put('http://localhost:8000/api/authors/'+id, author)
      .then(res => console.log(res))
      .catch(err=>{
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
      setErrors(errorArr);
    })
  }
  
  return (
    <div>
      {loaded && (
      <AuthorForm handelSubmit={updateAuthor} initialName={author.name} errors={errors}/>
      )}
    </div>
  )
}

export default Update