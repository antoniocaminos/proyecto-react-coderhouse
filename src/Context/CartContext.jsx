import React from 'react';
import { useState, useContext } from 'react';
export const CartContext = React.createContext([])
    
export const useCartContext = () => useContext(CartContext);
//export const addProduct = (product, quantity) => {


const CartProvider = ( { children } ) => {
    const [cart, setCart] = useState([]);
    /* const addItem =( item, newQuantity ) =>{
      const newCart = cart.filter(...item => item.id !== item.id); 
      newCart.push({...item, quantity: newQuantity});
      setCart(newCart);
    } */
    const addItem = (item, newQuantity) => {
      const { quantity = 0 } = cart.find( item => item.id === item.id ) || {};
      const newCart = cart.filter( item => item.id !== item.id );  
      setCart([...newCart, {...item, quantity: quantity + newQuantity}])
    }
    const clearCart = () => setCart([]);
    const isInCart = (id) => cart.find(item => item.id === id) ? true : false;   
    const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeFromCart,
        addItem,
    }}>
        {children}
    </CartContext.Provider>
  )
}
export default CartProvider;
