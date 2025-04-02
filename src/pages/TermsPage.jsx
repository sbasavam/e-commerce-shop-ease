import React from 'react';
import '../styles/Terms.css';

const TermsPage = () => {
  return (
    <div className="terms-page">
      <div className="terms-hero">
        <h1>Terms & Conditions</h1>
        <p>Understanding this demonstration application</p>
      </div>

      <div className="terms-container">
        <section className="terms-section">
          <h2>Application Disclaimer</h2>
          <div className="disclaimer-card">
            <div className="disclaimer-icon">⚠️</div>
            <div className="disclaimer-content">
              <p>
                <strong>This is a demonstration application only</strong> - ShopEase is not a real e-commerce platform.
                It was created by <strong>Sangana Basava M</strong> to showcase modern frontend development skills using:
              </p>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Modern CSS/SASS</li>
                <li>Redux State Management</li>
                <li>Responsive Design</li>
                <li>REST API Integration</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="terms-section">
          <h2>Data Source</h2>
          <p>
            This application uses the free <a href="https://dummyjson.com/" target="_blank" rel="noopener noreferrer">DummyJSON API</a> 
            to simulate real product data. All product information, images, and details are provided by this public API 
            and are used solely for demonstration purposes.
          </p>
        </section>

        <section className="terms-section">
          <h2>Development Purpose</h2>
          <p>
            This project was designed to demonstrate:
          </p>
          <div className="purpose-grid">
            <div className="purpose-card">
              <h3>UI/UX Design</h3>
              <p>Modern, responsive interfaces with intuitive navigation</p>
            </div>
            <div className="purpose-card">
              <h3>Frontend Architecture</h3>
              <p>Component-based structure with proper state management</p>
            </div>
            <div className="purpose-card">
              <h3>API Integration</h3>
              <p>Efficient data fetching and error handling</p>
            </div>
            <div className="purpose-card">
              <h3>Performance</h3>
              <p>Optimized rendering and loading strategies</p>
            </div>
          </div>
        </section>

        <section className="terms-section">
          <h2>Developer Information</h2>
          <div className="developer-card">
            <div className="developer-info">
              <h3>Sangana Basava M</h3>
              <p className="title">Full Stack Developer</p>
              <p>
                This application serves as a portfolio piece demonstrating my frontend development capabilities.
                All design and implementation was created by me using modern web technologies.
              </p>
              <div className="developer-links">
                <a href="https://github.com/sbasavam" target="_blank" rel="noopener noreferrer">
                  GitHub Portfolio
                </a>
                <a href="https://www.linkedin.com/in/sangana-basava-m-3029b5235/" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
                <a href="mailto:sanganabasavam1999@gmail.com">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="terms-section">
          <h2>Important Notes</h2>
          <ul className="notes-list">
            <li>No real transactions can be processed through this application</li>
            <li>All product data refreshes periodically from the API</li>
            <li>User accounts are simulated and not persisted</li>
            <li>This is purely a frontend demonstration with no backend server</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;