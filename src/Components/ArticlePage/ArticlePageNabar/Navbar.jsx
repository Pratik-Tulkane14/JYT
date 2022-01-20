import React from 'react';

// Importing css file
import './Navbar.css'
function Navbar() {
  return <div>
      <div className="navbar">
          <ul>
              <li><a href="">Services</a></li>
              <li><a href="">Projects</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact Us</a></li>
          </ul>
      </div>
  </div>;
}

export default Navbar;
