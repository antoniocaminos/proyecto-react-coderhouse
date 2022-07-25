import React , { useContext }from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  const CartContext = React.createContext([]);
  
  return (
    <Link to='/Cart' className='cat5'>
      <i className="bi bi-basket"></i>
    </Link>
    )
}
