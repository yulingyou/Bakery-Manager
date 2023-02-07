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
      <div class="navbar h-10 bg-lightgreen">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl text-black">Bakewells Bakery</a>
        </div>
        <Basket></Basket>
      </div>
      <div class="collapse justify-center mt-5">
        <input type="checkbox" /> 
        <div class="collapse-title text-xl font-medium">
          About us!
        </div>
      <div class="collapse-content"> 
          <p>Here's the link to our <a href="https://github.com/dev-mhowells/bakery-manager">github </a>page</p>
        </div>
      </div>
    <div class="divider"></div> 
      <div class='flex flex-wrap place-content-evenly'>
        {itemsDisplay}
      </div>
    </div>
  );
}

export default App;
