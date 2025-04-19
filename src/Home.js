// src/Home.js
import React, { useEffect } from 'react';
import './Home.css';

function Home() {
  // Optional: Add fade-in effect using JS on component mount
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => {
      el.classList.add('visible');
    });
  }, []);

return (
    <main className="home">
        {/* Hero Section with Background Image */}
        <section className="hero fade-in">
            <div className="hero-overlay">
                <h1 className="fade-in">Welcome to Nova Scotia Agrico</h1>
                <p className="fade-in">Championing sustainable agriculture in the heart of the Annapolis Valley.</p>
                <a href="/about" className="btn fade-in">Learn More</a>
            </div>
        </section>

        {/* Mission Section */}
        <section className="mission fade-in">
            <h2>Our Mission</h2>
            <p>
                We're dedicated to supporting local farmers, embracing eco-friendly practices,
                and promoting innovation in agriculture throughout Nova Scotia.
            </p>
        </section>
       

        

        {/* Testimonials Section */}
        <div className="testimonials fade-in">
            <h2>What Our Clients Say</h2>
            <blockquote>"Nova Scotia Agrico transformed our farm with their sustainable practices!"</blockquote>
            <cite>- Local Farmer</cite>
   
  
</div>

        {/* CTA Section */}
        <section className="cta fade-in">
            <h3>Have questions or want to partner with us?</h3>
            <a href="/contact" className="btn">Contact Us</a>
        </section>

        {/* GitHub Link */}
        <footer className="github-link fade-in">
            <a href="https://github.com/lgg6bentley" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> Visit our GitHub
            </a>
        </footer>
    </main>
);
}

// Removed duplicate Home component declaration

// Removed duplicate Home component declaration

export default Home;
