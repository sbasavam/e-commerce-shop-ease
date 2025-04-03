import React from "react";
import "../styles/About.css";
import { SiRedux } from "react-icons/si";

const About  = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="hero-content">
          <div className="logo-container">
            <div className="logo-circle">
              <span className="logo-text">SB</span>
            </div>
          </div>
          <h1>ShopEase Demo Application</h1>
          <p className="developer-credit-container">
            <span className="developer-credit">
              A Full-Stack Development Showcase by Sangana Basava M
            </span>
          </p>
        </div>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <h2>Project Overview</h2>
          <p>
            This demo application showcases my capabilities in building modern,
            responsive web applications with elegant UI/UX design and robust
            backend functionality. While not a live e-commerce platform, it
            demonstrates the full range of skills I bring to development
            projects.
          </p>
        </section>

        <div className="stats-container">
          <div className="stat-card">
            <h3>100%</h3>
            <p>Custom Code</p>
          </div>
          <div className="stat-card">
            <h3>2+ Years</h3>
            <p>Development Experience</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Components Built</p>
          </div>
        </div>

        <section className="team-section">
          <h2>The Full-Stack Developer</h2>
          <div className="developer-card">
            <div className="developer-avatar">SB</div>
            <div className="developer-info">
              <h3>Sangana Basava M</h3>
              <p className="title">Full Stack Software Engineer</p>
              <p className="bio">
                With 2+ years of hands-on experience, I specialize in creating
                stunning, responsive interfaces coupled with high-performance
                backend systems. This demo highlights my ability to architect
                complete solutions from database design to pixel-perfect
                frontend implementation.
              </p>
              <div className="developer-skills">
                <span>Frontend Architecture</span>
                <span>REST API Design</span>
                <span>Database Modeling</span>
                <span>Performance Optimization</span>
              </div>
              <div className="developer-links">
                <a
                  href="https://github.com/sbasavam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sangana-basava-m-3029b5235/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="mailto:sanganabasavam1999@gmail.com">
                  <i className="fas fa-envelope"></i> Contact
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="tech-stack">
          <h2>Technical Implementation</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <i className="fab fa-react"></i> React
            </div>
            <div className="tech-item">
              <i className="fab fa-node-js"></i> Node.js
            </div>
            <div className="tech-item">
              <i className="fab fa-js"></i> JavaScript
            </div>
            <div className="tech-item">
              <i className="fas fa-server"></i> Express
            </div>
            <div className="tech-item">
              <i className="fas fa-database"></i> SQL
            </div>
            <div className="tech-item">
              <i className="fab fa-css3-alt"></i> CSS3
            </div>
            <div className="tech-item">
              <i className="fab fa-html5"></i> HTML5
            </div>
            <div className="tech-item">
              <i className="fas fa-code-branch"></i> REST APIs
            </div>
            <div className="tech-item">
            <i className="fas"></i>
            <SiRedux  /> Redux
            </div>
          </div>
        </section>

        <section className="project-features">
          <h2>Key Development Features</h2>
          <ul>
            <li>Responsive, mobile-first design implementation</li>
            <li>Custom animated UI components and transitions</li>
            <li>Client-side routing and state management</li>
            <li>Mock API integration and data handling</li>
            <li>Performance-optimized rendering</li>
            <li>Cross-browser compatibility</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About ;
