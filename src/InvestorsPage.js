// src/InvestorsPage.js
import React from 'react';
import './InvestorsPage.css'; // Optional: For any additional styles

function InvestorsPage() {
  return (
    <div className="investors-page-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '2rem' }}>
      
      {/* Left Side: Text Content */}
      <div className="investors-page-content" style={{ flex: 1, paddingRight: '2rem' }}>
        <header>
          <h1>Investor Relations</h1>
          <p>Welcome to the Investors Page of Nova Agri.</p>
        </header>

        <section className="overview">
          <h2>Company Overview</h2>
          <p>We are a leading provider in sustainable agricultural solutions.</p>
        </section>

        <section className="financials">
          <h2>Financial Reports</h2>
          <ul>
            <li>
              <a href="https://ceresglobalagcorp.com/app/uploads/2024/11/CERES-GLOBAL-AG-Q1-FY25-EARNINGS-RELEASE.pdf" target="_blank" rel="noopener noreferrer">
                Q1 2025 Report
              </a>
            </li>
            <li>
              <a href="https://ceresglobalagcorp.com/app/uploads/2024/10/Ceres-Global-Ag-FY24-Annual-Information-Form.pdf" target="_blank" rel="noopener noreferrer">
                Annual Report 2024
              </a>
            </li>
            <li>
              <a href="https://ceresglobalagcorp.com/app/uploads/2024/09/CERES-GLOBAL-AG-FY24-EARNINGS-RELEASE.pdf" target="_blank" rel="noopener noreferrer">
                Q4 2024 Report
              </a>
            </li>
          </ul>
        </section>

        <section className="contact">
          <h2>Contact Investor Relations</h2>
          <p>If you have any questions or need further information, feel free to reach out to our Investor Relations team.</p>
          <form>
            <div>
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>

      {/* Right Side: Image */}
      <div className="investors-page-image-box" style={{ flex: '0 0 300px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
        <img
          src="https://wallpaperbat.com/img/9719055-investor-relations.jpg"
          alt="Investor Relations"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </div>
  );
}

export default InvestorsPage;
