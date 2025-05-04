import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="overlay">
        <h2>
          <i className="fas fa-seedling" style={{ marginRight: '10px' }}></i>
          About Us
        </h2>
        <p>
          Nova Scotia AgriCo is committed to sustainable farming in the heart of Canada's East Coast.
          With generations of experience, we produce fresh, organic, and locally grown products for
          communities across Nova Scotia and beyond.
        </p>
      </div>

      <footer className="enhanced-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img 
              src="https://roseng.ca/wp-content/uploads/2022/09/Flag-map_of_Nova_Scotia.svg-1024x854.png" 
              alt="Nova Scotia AgriCo Logo" 
            />
            <h3>Nova Scotia AgriCo</h3>
          </div>

          <div className="footer-links">
            <a href="home">Home</a>
            <a href="about">About</a>
            <a href="contact">Contact</a>
          </div>

          <div className="footer-social">
            <a href="https://x.com/usda" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/novascotia/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/nsperennia/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/lgg6bentley" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Nova Scotia AgriCo. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}

export default About;
