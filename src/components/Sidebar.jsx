import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar mx-2 my-2">
      <h3 className='fw-bold'>Filter Options</h3>
      <div className="filter-section">
        <p className='fw-bold'>Category</p>
        <ul>
          <li><input type="checkbox" id="category1" /> <label htmlFor="category1">Category 1</label></li>
          <li><input type="checkbox" id="category2" /> <label htmlFor="category2">Category 2</label></li>
          <li><input type="checkbox" id="category3" /> <label htmlFor="category3">Category 3</label></li>
        </ul>
      </div>
      <div className="filter-section">
        <p className='fw-bold'>Price Range</p>
        <input type="range" id="priceRange" min="0" max="100" />
        <span>Selected Price: $<span id="selectedPrice">50</span></span>
      </div>
      <button className="apply-filter-button">Apply Filters</button>
    </div>
  );
};

export default Sidebar;
