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

  // container with border
  //--- image
  //--- price
  //--- batch

  //container for counter and add button //
  //--- counter container
  //--- add button
  

  return (
    <body class="bg-rose-200">
      <table class="table-auto">
        <div class="min-h-screen display: inline-block">
          <div class="grid grid-cols-3 gap-2 p-12">
            <div class="bg-rose-100 col-span-4">{food.itemName}</div>
            <img></img>
            <div>Price: {food.price}</div>
            <p>Batch Quantity: {food.batchQuantity}</p>
            <div class="counters">
              <button class="bg-rose-500 hover:bg-rose-700 text-white font-bold py-1 px-2 rounded-full" onClick={increaseCount}>+</button>
              <p>{counter}</p>
              <button class="bg-rose-500 hover:bg-rose-700 text-white font-bold py-1 px-2 rounded-full" onClick={decreaseCount}>-</button>
            </div>
              <button class="bg-rose-500 hover:bg-rose-700 text-white font-bold py-1 px-2 rounded-full">add to basket</button>
            </div>
          </div>
        </table>
    </body>
  )
}

// class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
  
  const items = [blueberryMuffin, raspberryMuffin, chickenMuffin]

  const itemsDisplay = items.map((food) => {
    return <Item food={food}></Item>
  })

  return (
    <div class='flex'>
      {itemsDisplay}
    </div>
  );
}

export default App;
