import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import HeroSection from './components/HeroSection';
import CartContainer from './components/CartContainer';
import Footer from './components/Footer';
import Brand from './components/Brand';
import { Outlet, useLocation, useParams, Link } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

const App = () => {
  const location = useLocation();
  const { productId } = useParams();

  const shopPage = location.pathname === '/shop';
  const productPage = location.pathname.includes('/product-detail/');
  const yourCart = location.pathname === '/your-cart';
  const register = location.pathname === '/register';


  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://dummyjson.com/products';

        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log('Data from API:', data);

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
      <Navbar />

      {productPage ? (
        <ProductDetail />
      ) : (
        <>
          <Outlet />
          
          <hr />

          {!productPage && (
            <>
              <Brand />
              <hr />
              <CartContainer products={products} />
            </>
          )}

          <hr />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
