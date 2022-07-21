import React from 'react'
import Item from '../Item'

const ItemList = ({data = []}) => {
  return (
        data.map(foods => <Item key={foods.id} info={foods} />)    
  );
}
export default ItemList
{/* <Item /> */}