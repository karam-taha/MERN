import React from 'react'
import DeleteButton from './DeleteButton';

const GameList = (props) => {

  const { players, removeFromDom } = props;

  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Preferred Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, i) => <tr key={i} className='row'>
            <td>{player.name}</td>
            <td>{player.position}</td>
            <td className='actions'><DeleteButton playerId={ player._id } handleDelete ={ () => 
              removeFromDom(player._id) }/></td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default GameList