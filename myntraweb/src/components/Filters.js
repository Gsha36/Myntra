import React, { useState } from 'react';
import './Filters.css';

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    price: '',
    availability: '',
    size: '',
    bottom: '',
    neck: '',
    dupatta: '',
    feedingZips: '',
    lining: '',
    sleeves: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters); 
  };

  return (
    <div className="filters">
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={filters.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Availability:</label>
        <select name="availability" onChange={handleChange}>
          <option value="">Select</option>
          <option value="true">In Stock</option>
          <option value="false">Out of Stock</option>
        </select>
      </div>
      <div>
        <label>Size:</label>
        <select name="size" onChange={handleChange}>
          <option value="">Select</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
      <div>
        <label>Bottom:</label>
        <select name="bottom" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Palazzo">Palazzo</option>
          <option value="Jeans">Jeans</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label>Neck:</label>
        <select name="neck" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Round">Round</option>
          <option value="V-Neck">V-Neck</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label>Dupatta:</label>
        <select name="dupatta" onChange={handleChange}>
          <option value="">Select</option>
          <option value="true">With Dupatta</option>
          <option value="false">Without Dupatta</option>
        </select>
      </div>
      <div>
        <label>Feeding Zips:</label>
        <select name="feedingZips" onChange={handleChange}>
          <option value="">Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      <div>
        <label>Lining:</label>
        <select name="lining" onChange={handleChange}>
          <option value="">Select</option>
          <option value="true">Lined</option>
          <option value="false">Unlined</option>
        </select>
      </div>
      <div>
        <label>Sleeves:</label>
        <select name="sleeves" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Full">Full</option>
          <option value="Half">Half</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
  );
};

export default Filters;
