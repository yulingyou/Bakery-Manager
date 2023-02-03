import React from 'react';
import { useState } from 'react';
import BasketItem from './BasketItem';

export default function Basket(props) {
  
  const blueberryMuffin = {
    price: 22,
    itemName: 'Blueberry Muffin',
    batchQuantity: 12
  }
  
  const raspberryMuffin = {
    price: 25,
    itemName: 'Raspberry Muffin',
    batchQuantity: 12
  }

  const basket = [blueberryMuffin, raspberryMuffin];

  const getTotalPrice = () => {
    let total = 0;
    basket.forEach(element => {
      total += element.price;
    });
    return total.toFixed(2);
  }

  const basketDisplay = basket.map((item) => {
    return <BasketItem item={item}></BasketItem>
  })

  return(
<div class="navbar bg-lightgreen">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">Bakewells Bakery</a>
  </div>
  <div class="flex-none">
        <div class="dropdown dropdown-end dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span class="badge badge-sm indicator-item">{basket.length}</span>
            </div>
          </label>
          <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div class="card-body">
                  {basketDisplay}
                  <br></br>
              <li>Total Price: £{getTotalPrice()}</li>
              <div class="card-actions">
              <button class="btn btn-primary btn-block"><a href='/checkout'>Checkout</a></button>
            </div>
          </div>
          </div>
      </div>
      </div>
      <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://www.jocooks.com/wp-content/uploads/2022/03/bakewell-tart-1-28.jpg" />
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a href="/profile" class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
  </div>
  </div>
  
  )
};