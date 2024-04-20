import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {

    const {id,image, name, title, description, price} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

  return (
    <div>
        <div className="ui card">
        <img src={image} alt={name} className="image" />
        <div className='content'>
            <h5 className="header">{title}</h5>
            <p className="description">{description}</p>
            <p className="meta">${price}</p>
        </div>
        <button className='ui button blue' onClick={() => addToCart(id)}>
            Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </div>
    </div>
)

}