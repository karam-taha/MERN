import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import GameList from '../components/GameList';
import axios from 'axios';

const Main = () => {

const [players, setPlayers] = useState([]);

useEffect(() => {
  axios.get('http://localhost:8000/api/players')
    .then((res)=>{
      setPlayers(res.data);
  })
})

const removeFromDom = playerId => {
  setPlayers(players.filter(player => player._id !== playerId));
}

  return (
    <div className='list'>
      <h1><Link to={"/players/list"}>List</Link><span> | </span>
      <Link to={"/players/addplayer"}>Add Player</Link></h1>
      <GameList players={players} removeFromDom={removeFromDom} />
    </div>
  )
}

export default Main