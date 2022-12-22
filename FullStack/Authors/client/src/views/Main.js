import React, { useEffect, useState } from 'react';
import AuthorList from '../components/AuthorList'
import axios from 'axios';

const Main = () => {

    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
              setAuthors(res.data.Authors);
              console.log(res)
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);
    
    const removeFromDom = authorId => {
      setAuthors(authors.filter(author => author._id !== authorId));
    }
  return (
    <div>
      {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom} />}
    </div>
  )
}

export default Main