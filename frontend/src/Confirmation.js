import './styles.css';
import React from 'react';
import {useEffect, useState} from 'react';
// import BakersController from '../backend/controllers/bakers'

const Confirmation = () => {

    const [orderName, setOrderName] = useState(null)
    // const [orderQuantity, setOrderQuantity] = useState(null)
    const [orderId, setOrderId] = useState(null)

// fetch request getting information from database of confirmed orders     
useEffect(() => {
    fetch('/bakers', {
        method: 'get'
    })
    .then(res => res.json())
    .then((data) => {
        console.log("this is data", data);
        setOrderName(data.confirmedOrder[0].confirmedOrder)
        // setOrderQuantity(data.confirmedOrder[0]);
        console.log(data.confirmedOrder[0]);
        setOrderId(data.confirmedOrder[0].orderId);
    })
    },[]) 

// confirmation message
return (
  <div className="flex place-content-evenly mt-20">
    <div className="card w-96 bg-green drop-shadow-xl place-content-center border-2 border-beige">
  {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
      <div className="card-body">
        <div className="text-center">
          <h1>Order Invoice</h1>
        </div>
  <div className="orderText text-center" data-cy="confirmation_message">
          <h2><b>Your order is confirmed</b></h2></div>
    <h2 className="orderID text-center">Order ID: {orderId}</h2>
  
    <p className="order-name text-center" data-cy="order contents">{orderName}</p>

    <div className="card-actions justify-center">
      <button className="btn btn-primary"><a href ='/'>Home</a></button>
    </div>
  </div>
</div>
</div>
)
}

export default Confirmation; 