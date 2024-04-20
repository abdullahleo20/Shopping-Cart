import React from 'react';
import { Link } from 'react-router-dom';
import{ShoppingCart} from 'phosphor-react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="ui secondary pointing menu">
        <Link to="/" className='item'><h1>Shop</h1></Link>
       <div className='right menu'>
       <Link to="/cart" className='item'> <ShoppingCart size={32}/> </Link>
        </div>
    </div>
  )
}

export default Navbar;