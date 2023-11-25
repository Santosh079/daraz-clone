import React, { useEffect, useState } from 'react';
import CartContainer from './CartContainer';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://dummyjson.com/products';
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Invalid data format:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      <p>This is the shop page</p>
      <hr />
      {/* Render a single instance of CartContainer and pass the products */}
      <CartContainer products={products} />
    </div>
  );
};

export default Shop;
