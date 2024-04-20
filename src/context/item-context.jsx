
import React, {  useEffect ,createContext, useState, useContext } from 'react';
import axios from 'axios';

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          setItems(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }, []);
  
  
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const itemContextValue = {loading, setLoading, error, setError, items, setItems}
  
    return (
    <ItemContext.Provider value={itemContextValue}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItem = () => {
  return useContext(ItemContext);
};
