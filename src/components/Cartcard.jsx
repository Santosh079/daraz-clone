// Cartcard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Cartcard = ({ product }) => {
  return (
    <div className="container">
      <div className="row mx-1 mb-4">
        <div className="product text-center col">
          <img className="img-fluid my-2" src={product.thumbnail} alt={product.title} />
          <div className="star">{product.rating.rate}</div>
          <h5 className="p-name">{product.title}</h5>
          <h4 className="p-price">{product.price}</h4>
          <Link className="buy-btn" to={`/product-detail/${product.id}`}>
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
