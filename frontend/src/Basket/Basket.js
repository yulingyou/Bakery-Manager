import React from 'react';
import { useState } from 'react';
import BasketItem from './BasketItem';

export default function Basket(props) {
  
  const basket = [];

  // const basketDisplay = basket.map((item) => {
  //   return <BasketItem item={item}></BasketItem>
  // })


  return(
    <div class="dropdown">
      <label tabindex="0" class="btn m-1">Basket</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <p>{basket.itemName}</p>
        <p>{basket.price}</p>
          <li><a href='/checkout'>Checkout</a></li>
        </ul>
    </div>
  )
};