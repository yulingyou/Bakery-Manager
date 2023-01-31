import './styles.css';
import React from 'react';
import { useState } from 'react';


function Item({food}) {

  const [counter, setCounter] = useState(0)

  const increaseCount = () => {
    setCounter((prevCounter) => prevCounter + 1)
  }
  
  const decreaseCount = () => {
    setCounter((prevCounter) => prevCounter - 1)
  }
  

  return (
    <div class="m-10 place-content-evenly bg-green card w-96 bg-base-100 shadow-xl card-bordered">
    <figure><img src="https://www.dinnerbyheston.co.uk/cms/images/_800x418_crop_center-center_82_none/Brown-Bread-Ice-cream-APW-copy.jpg?mtime=1575465674"/></figure>
      <div class="rounded-b-lg bg-green card-body">
        <div class="bg-green text-bone">
          <h1 class="card-title heading">{food.itemName}</h1>
          <p>Price: {food.price}</p>
          <p>Batch Quantity: {food.batchQuantity}</p>
        </div>
    <div class="card-actions justify-end">
      <button class='btn btn-circle btn-sm' onClick={increaseCount}>+</button>
      <p class='text-center'>{counter}</p>
      <button class='btn btn-circle btn-sm' onClick={decreaseCount}>-</button>
      <button class="btn gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        Add to wishlist
      </button>
      <button class="btn btn-sm">Add to basket</button>
      
    </div>
  </div>
  </div>
  )
}

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
  
  const items = [blueberryMuffin, raspberryMuffin, chickenMuffin, lemonDrizzleCake]

  const itemsDisplay = items.map((food) => {
    return <Item food={food}></Item>
  })

  return (
    <div class='flex flex-wrap'>
      {itemsDisplay}

    </div>
  );
}

export default App;
