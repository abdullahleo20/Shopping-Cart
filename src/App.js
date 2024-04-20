import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import ShopContextProvider from './context/shop-context';
import { ItemProvider } from './context/item-context';

function App() {
  return (
    <div className="App">
      <ItemProvider>
        <ShopContextProvider>
          <Router>
            <Navbar/>
              <Routes>
                <Route path = '/' element={<Shop/>}/>
                <Route path = '/cart' element={<Cart/>}/>
              </Routes>
          </Router>
        </ShopContextProvider>
      </ItemProvider>
    </div>
  );
}

export default App;
