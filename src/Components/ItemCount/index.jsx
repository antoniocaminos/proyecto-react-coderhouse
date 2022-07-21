import React from 'react'
import './ItemCount.css'
import { useState , useEffect } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));
    
    const decrease = () => {
        setCount(count - 1);
    }
    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
    setCount(parseInt(initial));
    }, [initial]);

  return (
    <div className='counter'>
        <button onClick={decrease} disabled={count <= 1} className='sumres'>-</button>
        <span>{count}</span>
        <button onClick={increase} disabled={count >= stock} className='sumres'>+</button>
        {console.log(count)}
        <div>
            <button disable={ stock <= 0 } onClick={ ()=> onAdd(count)}>Agregar al Carrito</button>
        </div>
    </div>
    
  )
}
export default ItemCount