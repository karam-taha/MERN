import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {

    const deletePlayer = (e) => {
        const confirm = window.confirm("Confirm deletion to continue");
        if (confirm) {
            axios.delete('http://localhost:8000/api/players/' + props.playerId)
                .then(res => props.handleDelete())
                .catch(err => console.error(err));
        }
    }
    return (
        <div className='delete'>
            <button onClick={deletePlayer}>Delete</button>
        </div>
    )
}

export default DeleteButton