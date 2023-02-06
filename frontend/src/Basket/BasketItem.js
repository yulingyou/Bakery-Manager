import React from 'react';
import { useState, useEffect} from 'react';


export default function BasketItem(props) {
  const [item, setItem] = useState([]);
  const [pricePerBatch, setpricePerBatch] = useState([]);

  useEffect(() => {
    fetch(`/orders/getBatch/${props.item._id}`, {
    })
      .then(response => response.json())
      .then(async data => {
        setItem(data[0])
        setpricePerBatch((data[0].pricePerBatch).toFixed(2))
      })
    }, [props.updateBasket])
    
  return(
    <div>
      <p>-----------------------------------------</p>
      <p>{item.batchQuantity} | {item.itemName} | £{pricePerBatch}</p>
    </div>
  )

};