import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Shop from './components/Shop.jsx';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Footer from './components/Footer.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import YourCart from './components/YourCart.jsx';
import Register from './components/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product-detail/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/your-cart",
        element: <YourCart />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
