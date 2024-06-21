// src/components/Features.js
import React from 'react';
import '../App.css'; // Import specific CSS for features

const Features = () => (
  <section className="features">
    <div className="container row">
      <div className="feature">
        <img src={require('../images/Passionate.png')} alt="Passionate" />
        <h3>Passionate</h3>
        <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
      </div>
      <div className="feature">
        <img src={require('../images/resourceful.png')} alt="Resourceful" />
        <h3>Resourceful</h3>
        <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.</p>
      </div>
      <div className="feature">
        <img src={require('../images/friendly.png')} alt="Friendly" />
        <h3>Friendly</h3>
        <p>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
      </div>
    </div>
  </section>
);

export default Features;
