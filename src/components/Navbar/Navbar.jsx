import React, { useState } from 'react';
import './Navbar.scss'; // Import the Navbar component's SCSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-logo">
        Incubyte
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
        <a href="#about">About Us</a>
        <a href="#expertise">Our Expertise</a>
        <a href="#success">Success Stories</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className={`navbar-hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
