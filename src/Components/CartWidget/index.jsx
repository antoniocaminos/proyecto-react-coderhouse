import React from 'react';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  return (
    <Link to='/Cart' className='cat5'>
      <i className="bi bi-basket"></i>
    </Link>
    )
}
