import React from 'react';

export default function BasketItem(props) {

const item_price = (props.item.price*props.item.quantity).toFixed(2)

  return(
    <div>
      <p>-----------------------------------------</p>
      <p>{props.item.quantity} | {props.item.itemName} | £{item_price}</p>
    </div>
  )

};