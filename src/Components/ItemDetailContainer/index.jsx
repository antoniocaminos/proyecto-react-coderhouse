import React from 'react'
import ItemDetail from '../ItemDetail'
import { useState, useEffect } from 'react'

const foodSolo = {id: '1', name: "burger", description: "es una hamburguesa", price: "200", image:'https://www.pngfind.com/pngs/m/626-6263468_hamburguesa-bacon-clasica-hamburguesa-imagenes-de-hamburguesas-png.png', stock: "25", category: "burger"}

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
          resolve(foodSolo);
        }, 3000);
    });
    getData.then(res => setData(res))
  }, [])

  return (
    <>
        <ItemDetail data={data} />
    </>
  );
}
export default ItemDetailContainer 
/* <ItemDetail /> */