import React from 'react';
import { useState } from 'react';

export default function Item({food}) {

    const [counter, setCounter] = useState(0)
    const [basketText, setBasketText] = useState("Add to Basket"); 
    const [inBasket, setInBasket] = useState(false); 

    const increaseCount = () => {
      setCounter((prevCounter) => prevCounter + 1)
    }
    
  const decreaseCount = () => {
    if (this.counter > 0) {
        setCounter((prevCounter) => prevCounter - 1)
      }
  }

  const updateBasket = () => {
    if (inBasket){
      changeBasketButtonText("Add to basket")
      setInBasket(false)
    }
    else{
      changeBasketButtonText("In Basket")
      setInBasket(true)
    }
  }

  const changeBasketButtonText = (text) => setBasketText(text);

    return (
      <div className="m-10 place-content-evenly bg-green card w-96 bg-base-100 shadow-xl card-bordered">
        <div className="object-fit contain">
        <figure class="rounded -lg max-w-lg h-64 relative max-w-sm transition-all duration-300 ">
            <a href="#">
              <img class="rounded-lg" src={food.itemImage} />
          </a>
          </figure>
        <div className="rounded-b-lg bg-green card-body">
          <div className="bg-green text-bone">
            <h1 className="card-title heading">{food.itemName}</h1>
            <p>Price: {food.price}</p>
            <p>Batch Quantity: {food.batchQuantity}</p>
          </div>
      <div className="card-actions justify-end">
        <button data-cy="increase-btn" className='btn btn-circle btn-sm' onClick={increaseCount}>+</button>
        <p className='text-center' data-cy="counter">{counter}</p>
        <button data-cy="decrease-btn" class='btn btn-circle btn-sm' onClick={decreaseCount}>-</button>
        {/* <button className="btn gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          Add to wishlist
            </button> */}
            <div className="btn" onClick={() => updateBasket()}>{basketText}</div>
      </div>
    </div>
        </div>
        </div>
    )
  }