import React from 'react';
import './Home.css';

function Hero() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Nova Scotia AgriCo</h1>
        <p>Rooted in Tradition. Growing for Tomorrow.</p>
        <a href="#contact" className="cta-button">Contact Us</a>
      </div>
    </section>
  );
}

export default Hero;
