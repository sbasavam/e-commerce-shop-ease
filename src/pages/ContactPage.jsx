import React from 'react';
import '../styles/Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p>Let's collaborate on your next project</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <h2>Phone</h2>
          <a href="tel:+91 8150919941" className="contact-link">
            +91 8150919941
          </a>
          <p className="contact-note">Available Mon-Fri, 10AM-6PM</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <h2>Email</h2>
          <a href="mailto:sanganabasavam1999@gmail.com" className="contact-link">
            sanganabasavam1999@gmail.com
          </a>
          <p className="contact-note">Typically responds within 24 hours</p>
        </div>

        <div className="contact-cta">
          <h3>Prefer a direct message?</h3>
          <p>
            Connect with me on <a href="https://www.linkedin.com/in/sangana-basava-m-3029b5235/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or view my work on <a href="https://github.com/sbasavam" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;