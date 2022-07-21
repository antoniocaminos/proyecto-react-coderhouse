import React from 'react'
import './ItemList.css'

const Item = ({info}) => {
  return (
        <a href='/'className='food'>
            <img src={info.imgage} alt="es comida" />
            <p>{info.name}</p>
            <p>$: {info.price}</p>
            <p>{info.description}</p>
        </a>
    )
}
export default Item