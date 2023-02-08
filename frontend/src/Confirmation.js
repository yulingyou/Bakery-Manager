import './styles.css';
import React from 'react';
import {useEffect, useState} from 'react';

const Confirmation = () => {
  
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [companyName, setCompanyName] = useState("");
  const [orderSummary, setOrderSummary] = useState([]);
  const [dateNeededBy, setDateNeededBy] = useState (null);
  const [orderId, setOrderId] = useState("")


  useEffect(() => {
    if (token) {
      //specify the localhost
    const basketID = window.localStorage.getItem("currentBasketID")
    fetch(`/orders/filled/${basketID}`, { 
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then((data) => {
        console.log('all data from order', data)
        setToken(window.localStorage.getItem("token"));
        setCompanyName(data.companyName)
        setOrderSummary(data.orders)
        setOrderId(data._id)
  
      })
      .catch(error => console.error(error));
    } else {
    }
  }, []);

  const allNumbers = orderSummary?.map((order) => order.pricePerBatch * order.batchQuantity)
  const totals = allNumbers.reduce((a, b) => a + b, 0)


  const allOrders = orderSummary?.map((order, index) => {

    const totalRow = (
    <>
    <th>Total:</th>
    <td>{totals}</td>
    </>)

    return (
      <>
    <tr>
      <th>{index + 1}</th>
      <td>{order.itemName}</td>
      <td>{order.pricePerBatch}</td>
      <td>{order.batchQuantity}</td>
    </tr>
   {index + 1 === orderSummary.length && totalRow}
   </>
  )})

// confirmation message
return (
  <div className="flex place-content-evenly mt-20">
    <div className="card bg-green drop-shadow-xl place-content-center border-2 border-beige w-100">
  {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
      <div className="card-body">
        <div className="text-center">
          <h1>Order Invoice</h1>
        </div>
  <div className="orderText text-center" data-cy="confirmation_message">
          <h2><b>Your order is confirmed</b></h2></div>
    <h2 className="orderID text-center">Order ID: {orderId}</h2>
  
    {/* <p className="order-name text-center" data-cy="order contents"></p> */}
    <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price per batch</th>
        <th>Number Ordered</th>
      </tr>
    </thead>
    <tbody>
      {allOrders}
    </tbody>
  </table>
</div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary"><a href ='/'>Home</a></button>
    </div>
  </div>
</div>
</div>
)
}

export default Confirmation; 