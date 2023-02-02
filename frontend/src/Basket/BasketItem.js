import React from 'react';
import { useState, useEffect} from 'react';


export default function BasketItem(props) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`/orders/getBatch/${props.item._id}`, {
    })
      .then(response => response.json())
      .then(async data => {
        setItem(data[0])
      })
    }, [])
    
  return(
    <div>
      <p>-----------------------------------------</p>
      <p>{item.batch_quantity} | {item.item} | £{item.price_per_batch}</p>
    </div>
  )

};