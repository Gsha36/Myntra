// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'; 
import Filters from './components/Filters.js';
import ProductCarousel from './components/ProductCarousel.js';
import { db } from './firebaseConfig.js';
import { collection, getDocs, query, where } from 'firebase/firestore';

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  // Fetch products based on filters
  useEffect(() => {
    const fetchProducts = async () => {
      let q = collection(db, "products");
      
      // Apply filters to the query
      const filterQueries = [];
      for (const key in filters) {
        if (filters[key]) {
          filterQueries.push(where(key, '==', filters[key]));
        }
      }
      if (filterQueries.length > 0) {
        q = query(q, ...filterQueries);
      }
      
      const querySnapshot = await getDocs(q);
      const productsList = querySnapshot.docs.map(doc => doc.data());
      setProducts(productsList);
    };

    fetchProducts();
  }, [filters]);

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="App">
      <Navbar />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '0 0 250px' }}>
          <Filters onFilterChange={handleFilterChange} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
