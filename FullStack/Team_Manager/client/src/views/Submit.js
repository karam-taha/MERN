import React from 'react'
import { Link } from 'react-router-dom';
import GameForm from '../components/GameForm';

const Submit = () => {
  return (
    <div className='list'>
      <h1>
      <Link to={"/players/list"}>List</Link><span> | </span>
      <Link to={"/status/game/1"}>Add Player</Link>
      </h1>
      <GameForm/>
    </div>
  )
}

export default Submit