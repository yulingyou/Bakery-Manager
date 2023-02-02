import './styles.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Item from './Item';
import Basket from './Basket/Basket';
import Navbar from './Navbar';

function App() {
  const [items, setItems] = useState([]);


  useEffect(() => {
      fetch("/items", {
      })
        .then(response => response.json())
        .then(async data => {
          setItems(data.items);
        })
   
  }, [])


  const itemsDisplay = items.map((food) => {
    return <Item food={food}></Item> 
  })

  return (
    <div>
      <div class='flex flex-wrap'>
        <Navbar></Navbar>
        <Basket>Basket</Basket>
      </div>
      <div class='flex flex-wrap'>
        {itemsDisplay}
    </div>
    </div>
  );
}

export default App;
