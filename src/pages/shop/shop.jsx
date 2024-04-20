import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./shop.css";
import { Product } from './product';
import { useItem } from '../../context/item-context';


const Shop = () => {

  const {items} = useItem();

  return (
    <div>
        <h1 className='ui header'>See Our Collections!</h1>
        <div className="gallery">
            {items.map(
              (item) => <Product data={item}/>
          )
          };
        </div>

    </div>
  )
}

export default Shop;