import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton'

const Details = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    // const deleteProduct = (productId) => {
    //     axios.delete('http://localhost:8000/api/products/' + productId)
    //         .then(res => console.error(res))
    //         .catch(err => console.error(err));
    //     navigate("/products");
    // }
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.error(err));
    }, [])
    return (
        <div>
            <h1>{product.title}</h1>
            <div>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
            </div>
            <Link to={"/products/" + product._id + "/edit"}>Edit</Link>
            <DeleteButton productId={ product._id } handelDelete ={ () => navigate("/products") }/>
        </div>
    )
}

export default Details