import React,{useEffect, useState} from 'react'

const GameStatus = (props) => {
  const { num, players, changeGameStatus} = props;
  const [status, setStatus] = useState(1);
  useEffect(()=>{
    if(num==='1')setStatus("firstGame");
    else if(num==='2')setStatus("secondGame");
    else if(num==='3')setStatus("thirdGame");
  },[num])

  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, i)=><tr key={i}>
          <td>{player.name}</td>
          <td className='actions2'>
          <div className='status'>
            <button onClick={e=>changeGameStatus(status,player._id,2)} style={player[status]===2?{backgroundColor:"green",color:"white"}:{}}>Playing</button>
            <button onClick={e=>changeGameStatus(status,player._id,1)} style={player[status]===1?{backgroundColor:"red",color:"white"}:{}}>Not Playing</button>
            <button onClick={e=>changeGameStatus(status,player._id,0)} style={player[status]===0?{backgroundColor:"yellow"}:{}}>Undecided</button>
          </div>
          </td>
        </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default GameStatus