// CartContainer.jsx

import React from 'react';
import Cartcard from './Cartcard';

const CartContainer = ({ products }) => {
  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <div className="cart-container mx-2 d-flex flex-wrap">
      {products.map((product) => (
        <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <Cartcard product={product} />
        </div>
      ))}
    </div>
  );
};

export default CartContainer;
