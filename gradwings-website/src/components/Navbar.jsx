import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  // This state will manage whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">
        <img src="./logo.png" alt="Gradwings Logo" className="logo-image" />
        <span> Gradwings Immigration</span>
      </a>

      {/* This is the hamburger menu icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      {/* Navigation links - the 'active' class is added when menuOpen is true */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#achievements">Achievements</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
