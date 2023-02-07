import React from 'react';

 const BatchOrder = (props) => {

    return(
      <div>
        <p>-----------------------------------------</p>
            <p>{props.batchOrder.item} | {props.batchOrder.batch_quantity}</p>
            {/* need to add date due by, sort by soonest date */}
      </div>
    )
};
  
export default BatchOrder;