import React from 'react';
import { useState, useEffect} from 'react';


export default function BasketItem(props) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`/orders/getBatch/${props.item._id}`, {
    })
      .then(response => response.json())
      .then(async data => {
        console.log("DATA IN BASKETITEM:", data)
        console.log("Name of item:", data.item)
        console.log("Price of item:", data.price)
        setItem(data[0])
      })
    }, [])
    
    console.log("ITEM:", item)


// const item_price = (item.price*item.batch_quantity).toFixed(2)

  return(
    <div>
      <p>-----------------------------------------</p>
      {/* <p>{item.batch_quantity} | {item.item} | £{item_price}</p> */}
      {/* <p>{item.batch_quantity} | {item.item} | £{1}</p> */}
      <p>{item.batch_quantity} | {item.item} | £{item.price_per_batch}</p>
    </div>
  )

};