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
    if (counter > 0) {
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
          <div className="bg-green text-black">
            <h1 className="card-title heading">{food.itemName}</h1>
            <p>Price: {food.price}</p>
            <p>Batch Quantity: {food.batchQuantity}</p>
          </div>
      <div className="card-actions justify-end w-28">
      <button data-cy="decrease-btn" class='btn btn-circle btn-sm' onClick={decreaseCount}>-</button>
        <p className='text-center text-black' data-cy="counter">{counter}</p>
        <button data-cy="increase-btn" className='btn btn-circle btn-sm' onClick={increaseCount}>+</button>
      </div>
      <div data-cy="basket-btn" className="btn" onClick={() => updateBasket()}>{basketText}</div>

    </div>
        </div>
        </div>
    )
  }