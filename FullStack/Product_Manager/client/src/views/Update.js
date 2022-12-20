import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+id)
            .then(res => {
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
    }, [])

    const handelSubmit = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/'+id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
        navigate("/products/"+id);
    }
    return (
        <div className='form'>
            <h2>Edit a Product</h2>
            <form onSubmit={handelSubmit}>
                <p>
                    <label>Title: </label>
                    <input type='text' value={title} onChange={e => setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price: </label>
                    <input type='number' value={price} onChange={e => setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description: </label>
                    <input type='text' value={description} onChange={e => setDescription(e.target.value)}/>
                </p>
                <input type='submit' value='update'/>
            </form>
        </div>
    )
}

export default Update