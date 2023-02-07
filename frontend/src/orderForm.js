import './styles.css';
import React from 'react';
import OrderSummaryItem from './orderSummaryItem'
import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

const OrderForm = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [companyName, setCompanyName] = useState("");
  const [orderSummary, setOrderSummary] = useState([]);
  const [dateNeededBy, setDateNeededBy] = useState ("");
  const [orderId, setOrderId] = useState("")


  useEffect(() => {
    if (token) {
      console.log("token:", token)
      //specify the localhost
    fetch('/orders', { 
      // mode: 'cors',
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then((data) => {
        setToken(window.localStorage.getItem("token"));
        console.log("data:",  data)
        setCompanyName(data.orders[0].company)
        setOrderSummary(data.orders[0].orders)
        setOrderId(data.orders[data.orders.length-1]._id)
  
      })
      .catch(error => console.error(error));
    } else {
      navigate("/ABC");
    }
  }, []);

  console.log("ORDER SUMMARY:", orderSummary)

  const orderSumarryDisplay = orderSummary.map((orderID) => {
    return <OrderSummaryItem key={ orderID } orderID={orderID}></OrderSummaryItem>
  })

  console.log(orderId)
  const handleSubmit = (event) => {
    // debugger;
    event.preventDefault();
    console.log("handleSubmit")
    fetch(`/orders/update/${orderId}`, {
      method: "put",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ 
        date_required: dateNeededBy
      })
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch(error => console.error(error));
  };
  console.log("date needed by:", dateNeededBy)
  return (
  <div className="flex items-center justify-center h-screen">
    <div className="h-screen pt-20 font-sans bg-grey-lighter">
        <div className="container flex items-center justify-center mx-auto mt-20">
          <div className="block max-w-md p-6 rounded-lg shadow-lg bg-green">
            <form>
            <h1 className="mb-12 text-3xl text-center font-heading">
              Order Form
            </h1>
              <div className="mb-6 form-group">
                <div type="text" className="form-control block
                  h-10
                  w-96
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" data-cy="company_name"
                  placeholder="Company Name">Company Name: {companyName}</div>
              </div>
              <div className="mb-6 form-group">
                <div type="text" className="form-control block
                  w-96
                  h-auto
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" data-cy="order_summary"
                  placeholder="Order Summary">{orderSumarryDisplay}
                  </div>
              </div>
              <div className="mb-6 form-group">
                <input type="date" className="form-control block
                  w-96
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" data-cy="needed_by_date"
                  placeholder="Date needed by"
                  value={dateNeededBy}
                  onChange={e => setDateNeededBy(e.target.value)}></input>
              </div>
              <div>
              <button type="submit" className="
                btn
                w-full
                px-6
                py-2.5
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-#A9A9A9 hover:shadow-lg
                focus:bg-#A9A9A9 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-#A9A9A9 active:shadow-lg
                transition
                duration-150
                ease-in-out"
                onClick={handleSubmit} >Send</button>
              </div>
            </form>
          </div>
        </div>
    </div>
    </div>
  );
}

export default OrderForm;