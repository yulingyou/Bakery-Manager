import React from 'react';
import { useState } from 'react';

export default function BasketItem(props) {



  return(
    <div>
      <p>This is in the basket</p>
      <p>{props.item.itemName}</p>
      <p>{props.item.price}</p>
    </div>
  )

};