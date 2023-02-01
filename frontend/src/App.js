import './styles.css';
import React from 'react';
import { useState } from 'react';
import Item from './Item';
import Basket from './Basket';

function App() {
  // const [data, setData] = useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  // const basket = [1]



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
  
  const items = [blueberryMuffin, raspberryMuffin, chickenMuffin, lemonDrizzleCake]

  const itemsDisplay = items.map((food) => {
    return <Item food={food}> basket={basket}</Item> 
  })

  // const basketDisplay = basket.map((item) => {
  //   return <Basket item={item}></Basket>
  // })

  return (
    <div>
      <div class='flex flex-wrap'>
        {itemsDisplay}
      </div>
        <div class='flex flex-wrap'>
        {basketDisplay}
      </div>
    </div>
  );
}

export default App;
