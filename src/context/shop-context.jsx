import React, { createContext, useState } from 'react';
import { useItem } from './item-context';
import { CartItem } from '../pages/cart/CartItem';


export const ShopContext = createContext(null);


const ShopContextProvider = (props) => {


    const {items} = useItem();


    const getDefaultCart = () => {
        let cart = {};
        for (let i=1; i < items.length+1 ; i++ ){
            cart[i]=0;
        };
        return cart;
    }
    
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getCartAmount = () =>{
        let totalCost = 0;
        {items.map((product) => {
            if (cartItems[product.id] !== 0) {
              totalCost += cartItems[product.id]*product.price;
            }
            
          })}
          return totalCost;

    }
    
    const addToCart = (itemID) => {
        setCartItems((prev)=>({...prev, [itemID]: prev[itemID]+1}));
    };

    const removeFromCart = (itemID) => {
        setCartItems((prev)=>({...prev, [itemID]: prev[itemID]-1}));
    };

    const updateItemCount = (newAmount, itemID) => {
        setCartItems((prev) => ({...prev, [itemID]:newAmount}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateItemCount, getCartAmount};

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}




export default ShopContextProvider;