import React from 'react';

export default ( {itemDetails, markAsPurchased} ) => (
    <div>
      <span onClick={typeof markAsPurchased === "function" ? markAsPurchased(itemDetails.id) : null}>
        <h1>Item name: <span >{itemDetails.name}</span></h1>
        <h2>Item price: <span >{itemDetails.price}</span></h2>
      </span>
    </div>
);
