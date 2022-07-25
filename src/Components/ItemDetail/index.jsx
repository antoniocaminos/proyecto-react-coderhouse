import React from 'react'
import ItemCount from '../ItemCount';
import './ItemDetail.css'
import { useState, useContext  } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';

export const useCartContext = () => useContext(CartContext);


export const ItemDetail = ( { data } ) => {

  const [goToCart, setGoToCart] = useState(false);
  const { addItem } = useCartContext()

  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
    setGoToCart(true);
    addItem(data, quantity);
    }
  return (
    <div className='container'>
        <div className='detail'>
          <img src={data.imgage} alt={data.name} />
            <div className='content'>
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              </div>
            {
              goToCart
              ? <Link to={'/Cart'}>Terminar Compra</Link>
              :<ItemCount initial={0} stock={10} onAdd={onAdd} />
            }
        </div>
      </div>);   
}
export default ItemDetail