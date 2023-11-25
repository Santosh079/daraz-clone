// ProductDetail.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {

    const fetchProductDetails = async () => {
      try {
        const apiUrl = `https://dummyjson.com/products/${productId}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        setProduct(data); 
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <section className="container single_product my-5 pt-5">
      <div className="row mt-5">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <img
            className="img-fluid w-100 pd-1"
            src={product.thumbnail}
            alt={`Product: ${product.title}`}
          />
          {/* Other small images */}
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <h6>{product.title}</h6>
          <h3 className="py-4">{product.description}</h3>
          <h2>{product.price}</h2>
          <input
            type="number"
            value={1} // Default quantity, you might want to manage this state
            // onChange={handleQuantityChange}
            min="1"
            step="1"
          />
          {/* Assuming you have an Add to Cart button here */}
          <button className="buy-btn" onClick={() => console.log('Add to Cart clicked')}>
            Add To Cart
          </button>
          <h4 className="mt-5 mb-5">Product Detail</h4>
          <span>{product.description}</span>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
