import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {

    const deleteProduct = (e) => {
        const confirm = window.confirm("Confirm deletion to continue");
        if (confirm) {
            axios.delete('http://localhost:8000/api/products/' + props.productId)
                .then(res => props.handelDelete())
                .catch(err => console.error(err));
        }
    }
    return (
        <div className='delete'>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    )
}

export default DeleteButton