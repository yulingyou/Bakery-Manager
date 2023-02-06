import React from 'react';
import { useState } from 'react';

export default function Item(props) {

    const [counter, setCounter] = useState(0)
    const [basketText, setBasketText] = useState("Add to Basket"); 
    const [inBasket, setInBasket] = useState(false); 
    const [mostRecentBatchID, setMostRecentBatchID] = useState(""); 

    const increaseCount = () => {
      setCounter((prevCounter) => prevCounter + 1)
    }
    
  const decreaseCount = () => {
    if (counter > 0) {
        setCounter((prevCounter) => prevCounter - 1)
      }
  }

  const addBatchToOrder = async () => {
    let response = await fetch('/orders/addBatch', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ item: props.food.item_name, batch_quantity: counter, price_per_batch: props.food.price})
      })
    if (response.status !== 201) {
      console.log("post failed, Error status:" + response.status)
    } else {
      console.log("Batch added: " + response.status)
      let data = await response.json()
      console.log("BATCH ORDER ADDED:", data)
      setMostRecentBatchID(data.batchOrder._id)
    }
  }
  console.log("MOST RECENT BATCHID:", mostRecentBatchID)

  const removeBatchFromOrder = async () => {
    console.log("TRYING TO REMOVE BATCH:", mostRecentBatchID)
    let response = await fetch(`/orders/delete/batch/${mostRecentBatchID}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }, })
    if (response.status !== 201) {
      console.log("post failed, Error status:" + response.status)
    } else {
      console.log("Batch removed: " + response.status)
      let data = await response.json()
    }
  }

  const updateBasket = () => {
    if (inBasket){
      changeBasketButtonText("Add to basket")
      setInBasket(false)
      removeBatchFromOrder();

    }
    else if (!inBasket && counter >0){
      changeBasketButtonText("In Basket")
      setInBasket(true)
      addBatchToOrder();
    }
  }

  const changeBasketButtonText = (text) => setBasketText(text);

    return (
      <div className="m-10 place-content-evenly bg-green card w-96 shadow-xl rounded-t-lg">
          <figure>
              <img class="rounded-t-lg object-cover h-64 w-96" src={props.food.image} alt='food' />
          </figure>
          <div className="rounded-b-lg bg-green card-body">
            <div className="bg-green text-black">
              <h1 className="card-title heading">{props.food.itemName}</h1>
              <p>Price: {props.food.price}</p>
              <p>Batch Quantity: {props.food.batch_quantity}</p>
            </div>
          <div className="card-actions justify-end w-28">
            <button data-cy="decrease-btn" class='btn btn-circle btn-sm' onClick={decreaseCount}>-</button>
             <p className='text-center text-black' data-cy="counter">{counter}</p>
            <button data-cy="increase-btn" className='btn btn-circle btn-sm' onClick={increaseCount}>+</button>
          </div>
          <div data-cy="basket-btn" className="btn" onClick={() => updateBasket()}>{basketText}</div>
        </div>
      </div>
    )
  }