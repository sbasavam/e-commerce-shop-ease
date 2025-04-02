import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>ShopEase</h3>
            <p>Your one-stop shopping destination</p>
          </div>
          
          <div className="footer-links">
            <a href="/about" className="footer-link">About Us</a>
            <a href="/contact" className="footer-link">Contact</a>
            <a href="/terms" className="footer-link">Terms</a>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>
            &copy; {new Date().getFullYear()} ShopEase. All rights reserved. 
            <span className="developer-credit"> Developed by Sangana Basava M</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;