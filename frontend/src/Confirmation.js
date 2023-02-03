import './styles.css';
import React from 'react';
import {useEffect} from 'react';

const Confirmation = () => {
return (<div>Your order is confirmed and will be delivered on DATE</div>)
}

useEffect(() => {
    fetch('/bakers', {
        method: 'get'
    })
    .then(res => res.json())
    .then((data) => {
        console.log(bakers)
    })
    
}
)

export default Confirmation;

