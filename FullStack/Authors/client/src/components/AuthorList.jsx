import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const AuthorList = (props) => {

  const { removeFromDom } = props;
  
  return (
    <div>
      <h1>Favorite authors</h1>
      <p><Link to={"/new"}>add an author</Link></p>
      <h3>We have quotes by:</h3>
      <table>
        <thead>
          <tr>
          <th>Author</th>
          <th>Actions available</th>
        </tr>
          {props.authors.sort((a, b) => a.name.charAt(0).toUpperCase() + a.name.slice(1) > 
          b.name.charAt(0).toUpperCase() + b.name.slice(1) ? 1 : -1,).map((author, i) => {
          return <tr className='list' key={i}>
            <td className='names'>{author.name}</td>
            <td className='actions'>
              <div>
              <Link className='edit' to={"/edit/" + author._id}>Edit</Link>
              <DeleteButton authorId={ author._id } handelDelete ={ () => removeFromDom(author._id) }/>
              </div>
            </td>
          </tr>
        })}
        </thead>
      </table>
    </div>
  )
}

export default AuthorList