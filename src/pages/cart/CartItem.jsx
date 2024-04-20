import { useContext } from 'react';
import React from 'react'
import { ShopContext } from '../../context/shop-context';


export const CartItem = (props) => {

    const {id,image, name, title, description, price} = props.data;
    const {cartItems,  addToCart, removeFromCart, updateItemCount} = useContext(ShopContext);


  return (
    <div>
        <div className='ui card'>
        <img src={image} alt={name} className='ui centered small image'/>
        <div className='content'>
            <h4>{title}</h4>
            <p className="description"><b>Your total for ({cartItems[id]}) {title} is: </b>${cartItems[id]*price}</p>
            <div>
            <button className='mini ui button' onClick={()=> removeFromCart(id)}>-</button>
            <input value={cartItems[id]} className="mini ui input" onChange={(e)=>updateItemCount(Number(e.target.value), id)}/>
            <button className='mini ui button' onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    </div>
    </div>
  )
}
