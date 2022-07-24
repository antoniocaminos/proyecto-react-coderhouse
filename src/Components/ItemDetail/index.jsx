import React from 'react'

import './ItemDetail.css'


export const ItemDetail = ( { data } ) => {
  return (
    <div className='container'>
        <div className='detail'>
          <img src={data.imgage} alt={data.name} />
            <div className='content'>
              <h2>{data.name}</h2>
              <p>{data.description}</p>
            </div>
        </div>
      </div>);   
}
export default ItemDetail