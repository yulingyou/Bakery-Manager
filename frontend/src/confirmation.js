import './styles.css';
import React from 'react';
import {useEffect, useState} from 'react';

// import BakersController from '../backend/controllers/bakers'

const Confirmation = () => {

    const [orderName, setOrderName] = useState(null)

    
useEffect(() => {
    fetch('/bakers', {
        method: 'get'
    })
    .then(res => res.json())
    .then((data) => {
        setOrderName(data.confirmedOrder[0].confirmedOrder)
        console.log(data.confirmedOrder[0].confirmedOrder)
    })
    
}, [])


return (
    <div className='orderConfirmation'>
        <div className='orderText' data-cy="confirmation_message"><h1>Your order is confirmed and will be delivered on DATE</h1></div>
        <div className='orderName'> Order: 
        <p>{orderName} </p></div>
        <div className='orderQuantity'></div>
    </div>
)}
export default Confirmation;