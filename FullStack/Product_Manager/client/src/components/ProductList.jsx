import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton'

const ProductList = (props) => {

  const { removeFromDom } = props;
  return (
    <div>
      <h2>List of Products:</h2>
      <div>
        {props.products.map((product, i) => {
          return <div className='list' key={i}>
            <p><Link to={"/products/" + product._id}>{product.title}</Link></p>
            <DeleteButton productId={ product._id } handelDelete ={ () => removeFromDom(product._id) }/>
          </div>
        })}
      </div>
    </div>
  )
}

export default ProductList