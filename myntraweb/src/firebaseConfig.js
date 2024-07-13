// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcsMLNWbIhYsuutx9ucoav2UaMO3ITSVM",
  authDomain: "myntraweb-f37f2.firebaseapp.com",
  projectId: "myntraweb-f37f2",
  storageBucket: "myntraweb-f37f2.appspot.com",
  messagingSenderId: "571965816193",
  appId: "1:571965816193:web:7262e7d4654a43073d7c80",
  measurementId: "G-RBDQBF1KDW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
