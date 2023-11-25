// Rating.jsx
import React from 'react';

const Rating = ({ rating }) => {
  // Assuming rating is a number (e.g., 4.5)
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star-icon">&#9733;</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star-icon">&#9734;&#9733;</span>);
    }

    return stars;
  };

  return <div className="rating">{renderStars()}</div>;
};

export default Rating;
