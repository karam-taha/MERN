import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import GameStatus from '../components/GameStatus'

const Status = () => {

  const {num} = useParams();
  const [loaded, setLoaded] = useState(false);
  const [players, setPlayers] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8000/api/players')
    .then((res)=>{
      setPlayers(res.data);
      setLoaded(true);
    })
  })
  const changeGameStatus = (game, id, stat) => {
    const request = {};
    request[game]=stat;
    axios.put('http://localhost:8000/api/players/'+id, request)
    .then((res)=>{
      console.log(res)
      setPlayers(players.map((player)=>player._id===id?player[game]=stat:''))
    })
    .catch(err=>console.log(err))
    }

  return (
    <div className='list2'>
      <h1>Player Status - Game {window.location.pathname.split("/").pop()}</h1>
      <div className='links'>
        <Link to={"/status/game/1"}>Game 1</Link><span> | </span>
        <Link to={"/status/game/2"}>Game 2</Link><span> | </span>
        <Link to={"/status/game/3"}>Game 3</Link>
      </div>
      {loaded &&<GameStatus num={num} players={players} changeGameStatus={changeGameStatus} />}
    </div>
  )
}

export default Status