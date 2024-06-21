// src/Services.js
import React from 'react';
import './Services.css';
import '../App.css';
function Services({ onViewProjects }) {
  return (
    <div className="services">
      <div className="service" id="web-design">
        <h3>Web Design</h3>
        <img src={require('../images/web_design.gif')} alt="WEB DESIGN MAIN" />
        <p>A multi-carrier shipping website for ecommerce businesses</p>
        <button onClick={() => onViewProjects('Web Design')}>View Projects</button>
      </div>
      <div className="service" id="video-editing">
        <h3>Video Editing</h3>
        <img src={require('../images/web_design.gif')} alt="WEB DESIGN MAIN" />
        <p>Site for low-cost money transfers and sending money within seconds</p>
        <button onClick={() => onViewProjects('Video Editing')}>View Projects</button>
      </div>
      <div className="service" id="Thumbanail-design">
        <h3>Thumbanail Design</h3>
        <img src={require('../images/web_design.gif')} alt="WEB DESIGN MAIN" />
        <p>A state-of-the-art music player with high-resolution audio and DSP effects</p>
        <button onClick={() => onViewProjects('Thumbanail Design')}>View Projects</button>
      </div>
    </div>
  );
}

export default Services;
