import './styles.css';
import React from 'react';
import { useState, useEffect } from 'react';

const OrderForm = () => {
  const [order, setOrderSummary] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/orders', { //specify the localhost
      method: "get",
      // body: JSON.stringify({ message: order})
    })
      .then(res => res.json())
      .then(data => setOrderSummary(data))
      .catch(error => console.error(error));
  }, [order]);

  return (
  <div className="h-screen flex items-center justify-center">
    <div className="h-screen pt-20 font-sans bg-grey-lighter">
        <div className="container flex items-center justify-center mx-auto mt-20">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form>
              <div className="form-group mb-6">
                <input type="text" className="form-control block
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
                  placeholder="Company Name"></input>
              </div>
              <div className="form-group mb-6">
                <div type="text" className="form-control block
                  w-96
                  h-40
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
                  placeholder="Order Summary">{order}</div>
              </div>
              <div className="form-group mb-6">
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
                  placeholder="Date needed by"></input>
              </div>
              <div>
              <button type="submit" className="
                w-full
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out"
                id="submit" >Send</button>
              </div>
            </form>
          </div>
        </div>
    </div>
    </div>
  );
}

export default OrderForm;