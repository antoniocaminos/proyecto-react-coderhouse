import React from 'react';
import './App.css';
import { ItemListContainer } from './Components/ItemListContainer';
import { NavBar } from './Components/NavBar';
import { ItemDetailContainer } from './Components/ItemDetailContainer';
import { Cart } from './Components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  CartProvider  from './Context/CartContext';


export const CartContext = React.createContext('');
console.log("valor" , CartContext);


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider value='t'>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </>
  );
}

export default App;