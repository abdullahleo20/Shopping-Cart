import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./CartItem.jsx";
import { useItem } from "../../context/item-context";
import "./cartitem.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const {items} = useItem();
  const { cartItems, getCartAmount} = useContext(ShopContext);


  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div>
        {items.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {getCartAmount() > 0 ?
      <div>
        <p>Subtotal: $ {getCartAmount()}</p>
        <button className="ui green button" onClick={()=>navigate('/')}>Continue Shopping</button>
        <button className="ui blue button">Checkout</button>
      </div>
      : <h1>Your cart is empty!</h1>
        } 

      
    </div>
  );
};

export default Cart;