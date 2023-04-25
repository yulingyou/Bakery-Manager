import React from 'react';
import { useState, useEffect} from 'react';

export default function BasketItem(props) {
  const [item, setItem] = useState([]);
  const [pricePerBatch, setpricePerBatch] = useState([]);
  const [batchQuantity, setBatchQuantity] = useState([]);
  const [itemName, setItemName] = useState([]);

  useEffect(() => {
    fetch(`https://bakery-manager.onrender.com/orders/getBatch/${props.item._id}`, {
    })
      .then(response => response.json())
      .then(async data => {
        setItem(data[0])
        if (data[0].pricePerBatch){
          setpricePerBatch((data[0].pricePerBatch).toFixed(2))
          setBatchQuantity((data[0].batchQuantity))
          setItemName((data[0].itemName))
        }
      })
    }, [props.updateBasket])

  return(
    <div>
      <p>-----------------------------------------</p>
      <p>{batchQuantity} | {itemName} | £{pricePerBatch}</p>
    </div>
  )

};