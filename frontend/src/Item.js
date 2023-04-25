import React from 'react';
import { useState, useEffect } from 'react';

export default function Item(props) {

  const [counter, setCounter] = useState(0)
  const [basketText, setBasketText] = useState("Add to Basket"); 
  const [inBasket, setInBasket] = useState(false); 
  const [batchID, setBatchID] = useState(""); 
  const [quantityInBasket, setQuantityInBasket] = useState(); 
  const [basketID] = useState(window.localStorage.getItem("currentBasketID"));


  const changeCounter = (amount) =>{
    if ((counter > 0 && amount === -1) || (amount === +1)){
      setCounter((prevCounter) => prevCounter + amount)
    }

    if(!inBasket){
      changeBasketButtonText("Add to Basket")
    }else{
      changeBasketButtonText("Update Basket")
    }
  }

  //Fetch batch orders within basket
  useEffect(() => {
    if (basketID){
      fetch(`https://bakery-manager.onrender.com/orders/getBasketInfo/${basketID}`, {
      })
      .then(response => response.json())
      .then(async data => {
        data[0].orders.forEach(element => {
          if (element.itemName === props.food.itemName){
            setInBasket(true)
            setBatchID(element._id)
            changeBasketButtonText("In Basket")
            setCounter(element.batchQuantity)
            setQuantityInBasket(element.batchQuantity)
          }
        });
      });
    }
  }, [props.updateBasket])

  


const addBatchToOrder = async () => {
  console.log("BASKETID", basketID)
    let response = await fetch(`https://bakery-manager.onrender.com/orders/addBatch/${basketID}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ itemName: props.food.itemName, batchQuantity: counter, pricePerBatch: props.food.price})
      })
    if (response.status !== 201) {
      console.log("post failed, Error status:" + response.status)
    } else {
      console.log("Batch added: " + response.status)
      let data = await response.json()
      console.log("BATCH ORDER ADDED:", data)
      props.setUpdateBasket(!props.updateBasket)
      setBatchID(data.batchOrder._id)
    }
  }

  const removeBatchFromOrder = async () => {
    let response = await fetch(`https://bakery-manager.onrender.com/orders/delete/batch/${batchID}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ orderID: basketID})
      })
    if (response.status !== 201) {
      console.log("delete failed, Error status:" + response.status)
    } else {
      console.log("Batch removed: " + response.status)
      props.setUpdateBasket(!props.updateBasket)
    }
  }
  
  const updateBatchOrder = async () =>{
    let response = await fetch(`https://bakery-manager.onrender.com/batchOrders/update/batch/${batchID}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({batchQuantity: counter})
    })
    if (response.status !== 202){
      console.log("patch failed, Error status:" + response.status)
    }
    else{
      console.log("Batch updated:" + response.status)
      console.log("NEW AMOUNT:" + counter)
      props.setUpdateBasket(!props.updateBasket)

      }
    }

  const updateBasket = () => {
    //if remove item from basket
    if (inBasket && quantityInBasket === counter){
      changeBasketButtonText("Add to basket")
      setInBasket(false)
      setCounter(0)
      removeBatchFromOrder();
    }
    //if in basket but quantity has been changed
    else if (inBasket && quantityInBasket !== counter){
      changeBasketButtonText("In Basket")
      updateBatchOrder();
      setInBasket(true)
      setQuantityInBasket(counter)
    }
    //if not in basket
    else if (!inBasket && counter >0){
      changeBasketButtonText("In Basket")
      setInBasket(true)
      addBatchToOrder();
      setQuantityInBasket(counter)
    }
  }
  const changeBasketButtonText = (text) => setBasketText(text);

  return (
      <div className="m-10 rounded-t-lg shadow-xl place-content-evenly bg-lightgreen card w-96">
          <figure>
              <img class="rounded-t-lg object-cover h-64 w-96 " src={props.food.image} alt='food' />
          </figure>
          <div className="rounded-b-lg card-body">
            <div className="text-black bg-lightgreen">
              <h1 className="card-title heading">{props.food.itemName}</h1>
              <p>Price: {props.food.price.toFixed(2)}</p>
              <p>Batch Quantity: {props.food.batchQuantity}</p>
            </div>
            <div className="justify-end card-actions w-28">
      <button data-cy="decrease-btn" class='btn btn-circle btn-sm bg-bone text-black' onClick={()=>{changeCounter(-1)}}>-</button>
        <p className='text-center text-black' data-cy="counter">{counter}</p>
        <button data-cy="increase-btn" className='text-black btn btn-circle btn-sm bg-bone' onClick={()=>{changeCounter(1)}}>+</button>
      </div>
          <div data-cy="basket-btn" className="text-black btn bg-bone" onClick={() => updateBasket()}>{basketText}</div>
      </div>
      </div>
    )
  }