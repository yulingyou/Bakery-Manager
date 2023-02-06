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
        <div class='flex flex-wrap place-content-evenly'>
        <div class="collapse">
        <input type="checkbox" /> 
        <div class="mt-5 collapse-title text-xl font-medium">
          ABOUT US
        </div>
        <div class="collapse-content"> 
          <p>bake</p>
        </div>
      </div>
    <div class="divider w-full"></div>
          {/* {itemsDisplay} */}
          </div>
      </div>
      <div class='flex flex-wrap'>
        {itemsDisplay}
    </div>
    </div>
  );
}

export default App;
