// src/components/Hero.js
import React from 'react';
import '../App.css';  // Import specific CSS for hero

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-text">
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
        <button className="cta-button">Learn More</button>
      </div>
      <div className="hero-image">
        <img src={require('../images/LOGO.jpg')} alt="Phone" />
      </div>
    </div>
  </section>
);

export default Hero;
