// src/seedData.js
import { db } from './firebaseConfig.js';
import { collection, addDoc } from 'firebase/firestore';

const products = [
  {
    product_name: "Anarkali Kurta",
    price: 1999.99,
    availability: true,
    size: ["S", "M", "L", "XL"],
    bottom: "Palazzo",
    neck: "Round",
    dupatta: true,
    feeding_zips: false,
    lining_inner: true,
    sleeves: "Full",
    category: "Fusion Wear",
    description: "A beautiful Anarkali Kurta with intricate designs.",
    image_url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJam6sIdtTA7ce7wC4gsq40n_t9N0TxVd6u3E0GHkpHFcxd_pGNkCwngB5JTvRSn8STnM5TqEIhL7ch8ibjD_dOhHhvzN_K-mRHOQPJTkO&usqp=CAE",
    brand: "EthnicWear",
    rating: 4.5,
    reviews: "Great quality and fit!",
    color: "Red",
    material: "Cotton",
    discount: 20.00
  },
  // Add 9 more product objects with different data
  {
    product_name: "Straight Kurta",
    price: 1499.99,
    availability: true,
    size: ["S", "M", "L", "XL"],
    bottom: "Leggings",
    neck: "V-Neck",
    dupatta: false,
    feeding_zips: false,
    lining_inner: false,
    sleeves: "Half",
    category: "Ethnic Wear",
    description: "A stylish straight kurta with elegant patterns.",
    image_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQPnp0j-lAFOehPi3jX55qTrBoHnOcJ26h-YRhF8w8ZMwnRB0xcX666IZWyDfYkNhCwgOg_g1l1u4BfeAA7kRtttnLFF6qbvCC2h_iY_uA6EixuJSnE9Q6jog&usqp=CAE",
    brand: "EthnicWear",
    rating: 4.0,
    reviews: "Comfortable and well-fitted!",
    color: "Blue",
    material: "Rayon",
    discount: 15.00
  },
  // Continue adding more products as needed
];

const addProducts = async () => {
  try {
    const productsCollection = collection(db, 'myntraweb');
    for (const product of products) {
      await addDoc(productsCollection, product);
    }
    console.log('Products added successfully');
  } catch (error) {
    console.error('Error adding products: ', error);
  }
};

addProducts();
