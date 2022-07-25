import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

import './ItemList.css'

const Item = ( { info } )  => {
  const traerContext = useContext(CartContext);  
  console.log(traerContext);
  return (
        <Link to={`/detail/${info.id}`}>
            <img src={info.imgage} alt="es comida" />
            <p>{info.name}</p>
            <p>$: {info.price}</p>
            <p>{info.description}</p>
        </Link>
    )
}
export default Item; 