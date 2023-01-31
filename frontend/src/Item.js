import React from 'react';
import { useState } from 'react';

export default function Item({food}) {

    const [counter, setCounter] = useState(0)
  
    const increaseCount = () => {
      setCounter((prevCounter) => prevCounter + 1)
    }
    
    const decreaseCount = () => {
      setCounter((prevCounter) => prevCounter - 1)
    }
    
  
    return (
      <div class="card w-96 bg-base-100 shadow-xl card-bordered">
    <figure><img src=""/></figure>
    <div class="card-body">
      <h2 class="card-title">{food.itemName}</h2>
      <p>Price: {food.price}</p>
      <p>Batch Quantity: {food.batchQuantity}</p>
      <div class="card-actions justify-end">
        <button data-cy="increase-btn" class='btn' onClick={increaseCount}>+</button>
        <p data-cy="counter">{counter}</p>
        <button data-cy="decrease-btn" class='btn' onClick={decreaseCount}>-</button>
        <button class="btn btn-primary">Add to basket</button>
      </div>
    </div>
  </div>
    )
  }