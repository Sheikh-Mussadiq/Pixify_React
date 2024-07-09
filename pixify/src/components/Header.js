// src/components/Header.js
import React from 'react';
import '../App.css'; 
import '../images/LOGO.jpg'

const Header = () => {
  const toggleMobileMenu = () => {
    document.getElementById('mobileMenu').classList.toggle('open');
  };

  return (
    <header className="header">
      <img className="logo" src={require('../images/LOGO.jpg')} alt="LOGO" />
      <nav className="nav">
        <a href="#">HOME</a>
        <a href="./aboutus.html">CONTACT</a>
      </nav>
     
    </header>
  );
};

export default Header;
