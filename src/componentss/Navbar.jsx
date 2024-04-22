import React from 'react';
import './navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="d">Home</a></li>
        <li><a href="d">About</a></li>
        <li><a href="d">Services</a></li>
        <li><a href="d">Contact</a></li>
      </ul>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button type="submit">Cerca</button>
      </div>
    </nav>
  );
}

export default Navbar;