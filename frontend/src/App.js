import './styles.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Item from './Item';
import Basket from './Basket/Basket';
import Navbar from './Navbar';

function App() {
  const [items, setItems] = useState([]);
  const [updateBasket, setUpdateBasket] = useState(false)

  useEffect(() => {
      fetch("/items", {
      })
        .then(response => response.json())
        .then(async data => {
          setItems(data.items);
        })
   
  }, [])


  const itemsDisplay = items.map((food) => {
    return <Item key={ food._id } updateBasket={updateBasket} setUpdateBasket={setUpdateBasket} food={food}></Item> 
  })

  return (
    <div>
      <div class='flex flex-wrap'>
        <Navbar></Navbar>
        <Basket updateBasket={updateBasket} setUpdateBasket={setUpdateBasket}></Basket>
        <div class='flex flex-wrap place-content-evenly'>
        <div class="collapse">
        <input type="checkbox" /> 
        <div class="collapse-title text-xl font-medium mt-5">
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
