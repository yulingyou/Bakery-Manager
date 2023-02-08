import React from 'react';

 const BatchOrder = (props) => {

    return(
      <div>
        <div className="divider"></div>
            <p>{props.batchOrder.itemName} | {props.batchOrder.batchQuantity}</p>
            {/* need to add date due by, sort by soonest date */}
      </div>
    )
};
  
export default BatchOrder;