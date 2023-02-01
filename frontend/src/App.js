import './styles.css';
import React from 'react';
import { useState } from 'react';
import Item from './Item';
import BasketItem from './Basket/BasketItem';
import Basket from './Basket/Basket';
import Navbar from './Navbar';

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
    batchQuantity: 12,
    itemImage: "https://images.squarespace-cdn.com/content/v1/51ceeab3e4b025acba722204/1439679792289-OQW8GOQBUTCYVM7WN29C/Blueberry+Muffins+-+The+Stiers+Aesthetic"
  }
  
  const raspberryMuffin = {
    price: 25,
    itemName: 'Raspberry Muffin',
    batchQuantity: 12,
    itemImage: "https://vintagekitchennotes.com/wp-content/uploads/2022/04/Raspberry-muffins-11.jpeg"
  }
  
  const chickenMuffin = {
    price: 2,
    itemName: 'Chicken Muffin',
    batchQuantity: 22,
    itemImage: "https://sodelicious.recipes/wp-content/uploads/2017/10/e738d-06.03.2017-r1-var1-chicken-muffin-sandwiches-1200x1200.jpg"
  }

  const lemonDrizzleCake = {
    price: 20,
    itemName: 'Lemon Drizzle Cake',
    batchQuantity: 1,
    itemImage: "https://charlotteslivelykitchen.com/wp-content/uploads/2021/04/lemon-drizzle-loaf-cake-8.jpg"
  }
  
  const items = [blueberryMuffin, raspberryMuffin, chickenMuffin, lemonDrizzleCake]

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
