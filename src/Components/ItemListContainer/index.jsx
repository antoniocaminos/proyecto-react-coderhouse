import React from 'react'
import { Title } from '../Title'
import { ItemCount } from '../ItemCount'
import  ItemList  from '../ItemList'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

const foods = [
  {id: '1', name: "burger", description: "es una hamburguesa", price: "200", imgage:'https://www.pngfind.com/pngs/m/626-6263468_hamburguesa-bacon-clasica-hamburguesa-imagenes-de-hamburguesas-png.png' , stock: "25", category: "burger"},
  {id: "2", name: "fries", description: "son papas fritas", price: "100", imgage: 'https://www.pngfind.com/pngs/m/626-6263468_hamburguesa-bacon-clasica-hamburguesa-imagenes-de-hamburguesas-png.png', stock: "25", category: "fries"},
  {id: "3", name: "soda", description: "es una pepsi", price: "100", imgage: 'https://www.pngfind.com/pngs/m/626-6263468_hamburguesa-bacon-clasica-hamburguesa-imagenes-de-hamburguesas-png.png',  stock: "25" , category: "drink"},
  {id: "4", name: "ice", description: "es un helado", price: "90", imgage: 'https://www.pngfind.com/pngs/m/626-6263468_hamburguesa-bacon-clasica-hamburguesa-imagenes-de-hamburguesas-png.png',  stock: "25" , category: "dessert"},
  {id: '5', name: "burger_a", description: "es una hamburguesa", price: "200", imgage: 'https://www.pngfind.com/pngs/m/626-6263468_hamburguesa-bacon-clasica-hamburguesa-imagenes-de-hamburguesas-png.png', stock: "25", category: "burger"},
  {id: "6", name: "fries_a", description: "son papas fritas", price: "100", imgage: 'https://www.pngfind.com/pngs/m/626-6263468_hamburguesa-bacon-clasica-hamburguesa-imagenes-de-hamburguesas-png.png', stock: "25", category: "fries"},
  {id: "7", name: "soda_a", description: "es una pepsi", price: "100", imgage: 'https://www.pngfind .com/pngs/m/626-6263468_hamburguesa-bacon-clasica-hamburguesa-imagenes-de-hamburguesas-png.png',  stock: "25" , category: "drink"},
  {id: "8", name: "ice_a", description: "es un helado", price: "90", imgage: 'https://www.pngfind.com/pngs/m/626-6263468_hamburguesa-bacon-clasica-hamburguesa-imagenes-de-hamburguesas-png.png',  stock: "25" , category: "dessert"},
  ];
export const ItemListContainer = ({texto}) => {

  const [ data, setData] = useState([]);
  
  const { categoryId } = useParams();

  useEffect(() => { 
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(foods);
      }, 1500);
  });
  if (categoryId){
    getData.then(res => res.filter(foods => foods.category === categoryId))
  }else{
    getData.then(res => setData(res));
  }
  }, [categoryId]);
  const onAdd = (quantity) => {
  console.log(`compraste ${quantity} unidades`);
  }
  return (
    <>
        <Title greeting={texto} />
        <ItemCount initial={0} stock={10} onAdd={onAdd} />
        <ItemList data={data} />
    </>
  );
}

export default ItemListContainer;
