import './styles.css';
import React from 'react';
import { useState } from 'react';
import Item from './Item';
import BasketItem from './Basket/BasketItem';
import Basket from './Basket/Basket';

function App() {
  // const [data, setData] = useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  const blueberryMuffin = {
    price: 22,
    itemName: 'Blueberry Muffin',
    batchQuantity: 12
  }
  
  const raspberryMuffin = {
    price: 25,
    itemName: 'Raspberry Muffin',
    batchQuantity: 12
  }
  
  const chickenMuffin = {
    price: 2,
    itemName: 'Chicken Muffin',
    batchQuantity: 22
  }

  const lemonDrizzleCake = {
    price: 20,
    itemName: 'Lemon Drizzle Cake',
    batchQuantity: 1
  }

  const krispyKreme = {
    price: 20,
    itemName: 'Lemon Drizzle Cake',
    batchQuantity: 1
  }

  const pancakes = {
    price: 20,
    itemName: 'Lemon Drizzle Cake',
    batchQuantity: 1
  }
  
  const items = [blueberryMuffin, raspberryMuffin, chickenMuffin, lemonDrizzleCake, krispyKreme, pancakes]

  const itemsDisplay = items.map((food) => {
    return <Item food={food}></Item> 
  })

  return (
    <div>
      <div class='flex flex-wrap'>
        <Basket>Basket</Basket>
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
          {itemsDisplay}
          </div>
      </div>
    </div>
  );
}

export default App;
