// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import myntra from 'C:/Repos/Myntra/myntraweb/src/assets/myntra.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={myntra} style={{height: 80, width: 80}}/>
      <ul className="nav-list">
        <li className="nav-item"><NavLink to="/" exact activeClassName="selected">HOME</NavLink></li>
        <li className="nav-item"><NavLink to="/" exact activeClassName="selected">MEN</NavLink></li>
        <li className="nav-item"><NavLink to="/" exact activeClassName="selected">WOMEN</NavLink></li>
        <li className="nav-item"><NavLink to="/" exact activeClassName="selected">KIDS</NavLink></li>
        <li className="nav-item"><NavLink to="/" exact activeClassName="selected">HOME & LIVING</NavLink></li>
        <li className="nav-item"><NavLink to="/" exact activeClassName="selected">BEAUTY</NavLink></li>
        <li className="nav-item"><NavLink to="/" exact activeClassName="selected">STUDIO</NavLink></li>
        <li className="nav-item"><NavLink to="/stitch-it" activeClassName="selected">STITCH IT</NavLink></li>
        <li className="nav-item">
          <input type="text" placeholder="Search..." className="search-bar" />
        </li>
        <li className="nav-item"><NavLink to="/profile" activeClassName="selected">PROFILE</NavLink></li>
        <li className="nav-item"><NavLink to="/wishlist" activeClassName="selected">WISHLIST</NavLink></li>
        <li className="nav-item"><NavLink to="/bag" activeClassName="selected">BAG</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
