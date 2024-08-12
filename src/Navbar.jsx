// Navbar.jsx
import React from "react";
import './index.css';

function Navbar({ navbarBackgroundColor }) {
  return (
    <div className="parentnav" >
      <div className="leftnav">
        <h2 className="navitem">HOME</h2>
      </div>
      <div className="rightnav">
        <h2 className="navitem">MENU</h2>
        <h2 className="navitem">ORDER</h2>
        <h2 className="navitem">CONTACT US</h2>
      </div>
    </div>
  );
}

export default Navbar;
