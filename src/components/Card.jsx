import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../redux/actions/productAction';

const Card = ({product}) => {

  const dispatch = useDispatch();

  const addBasket =() => {
    dispatch(addToBasket(product))
  }

  return (
    <div className="card " style={{width:'18rem'}}>
        <div className='mb-5' style={{height:'300px'}}>
           <img className="card-img-top  p-5 rounded " src={product.image} alt="Card image cap"/>
        </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          {product.description.slice(0,50) +' ...'}
        </p>
        <button onClick={addBasket} className="btn btn-primary">Sepete Ekle</button>
      </div>
  </div>
  )
}

export default Card
