import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home">
      <div class="container">
        <h5>NEW ARRIVALS</h5>
        <h1><span> Best Price </span>This Season</h1>
        <p>Eshop Offers the best products for the affordable prices</p>
        <Link className="buy-btn" to ="product-detail">Shop Now</Link>
      </div>
    </section>
  );
};

export default HeroSection;
