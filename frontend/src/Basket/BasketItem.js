import React from 'react';
import { useState } from 'react';

export default function BasketItem(props) {



  return(
    <div>
      <p>-----------------------------------</p>
      <p>{props.item.itemName} | £{props.item.price}</p>
    </div>
  )

};