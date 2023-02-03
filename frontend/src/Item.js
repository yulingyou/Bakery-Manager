import React from 'react';
import { useState, useEffect } from 'react';

export default function Item(props) {

    const [counter, setCounter] = useState(0)
    const [basketText, setBasketText] = useState("Add to Basket"); 
    const [inBasket, setInBasket] = useState(false); 
    const [batchID, setBatchID] = useState(""); 
    const [quantityInBasket, setQuantityInBasket] = useState(); 

    const increaseCount = () => {
      if (!inBasket){
        setCounter((prevCounter) => prevCounter + 1)
      }else{
        setCounter((prevCounter) => prevCounter + 1)
        changeBasketButtonText("Update Basket")
      }
    }
    
    const decreaseCount = () => {
      if (counter > 0) {
        if(!inBasket){
          setCounter((prevCounter) => prevCounter - 1)
        }else{
          setCounter((prevCounter) => prevCounter - 1)
          changeBasketButtonText("Update Basket")
        }
      }
  }

  useEffect(() => {
    fetch("/orders/getBasketInfo/63dbab59d49bd03887f3aafe", {
    })
    .then(response => response.json())
    .then(async data => {
      data[0].orders.forEach(element => {
        if (element.item === props.food.item_name){
          setInBasket(true)
          setBatchID(element._id)
          changeBasketButtonText("In Basket")
          setCounter(element.batch_quantity)
          setQuantityInBasket(element.batch_quantity)
        }
      });
    });
  }, [inBasket])
  


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
      setBatchID(data.batchOrder._id)
    }
  }

  const removeBatchFromOrder = async () => {
    let response = await fetch(`/orders/delete/batch/${batchID}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }, })
    if (response.status !== 201) {
      console.log("post failed, Error status:" + response.status)
    } else {
      console.log("Batch removed: " + response.status)
    }
  }
  
  const updateBatchOrder = async () =>{
    let response = await fetch(`batchOrders/update/batch/${batchID}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({batch_quantity: counter})
      })
      if (response.status !== 202){
        console.log("ERROR: ", response.error)
        console.log("ATTEMPTED REQUEST:", `/batchOrders/update/batch/${batchID}`)
        console.log("counter:", counter)
        console.log("patch failed, Error status:" + response.status)
      }
      else{
        console.log("Batch updated:" + response.status)
      }
    }

  const updateBasket = () => {
    //if remove item from basket
    if (inBasket && quantityInBasket === counter){
      changeBasketButtonText("Add to basket")
      setInBasket(false)
      removeBatchFromOrder();
    }
    //if in basket but quantity has been changed
    else if (inBasket && quantityInBasket !== counter){
      changeBasketButtonText("In Basket")
      setInBasket(true)
      updateBatchOrder();
    }
    //if not in basket
    else if (!inBasket && counter >0){
      changeBasketButtonText("In Basket")
      setInBasket(true)
      addBatchToOrder();
    }
  }
  const changeBasketButtonText = (text) => setBasketText(text);


    return (
      <div className="m-10 place-content-evenly bg-green card w-96 bg-base-100 shadow-xl card-bordered">
        <div className="object-fit contain">
        <figure class="rounded -lg max-w-lg h-64 relative max-w-sm transition-all duration-300 ">
            <a href="#">
              <img class="rounded-lg" src={props.food.image} />
          </a>
          </figure>
        <div className="rounded-b-lg bg-green card-body">
          <div className="bg-green text-black">
            <h1 className="card-title heading">{props.food.item_name}</h1>
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
        </div>
    )
  }