import React from 'react';
import './footer.scss'; // Ensure the SCSS file is correctly imported
import { Link } from 'react-router-dom'; // Using Link for internal navigation

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-section">
            <h5>About Cool Shopping Cart App</h5>
            <p>
              Our Cool Shopping Cart App offers a wide variety of products at
              competitive prices. Discover deals and save on your favorite
              items.
            </p>
          </div>
          <div className="col-md-4 footer-section">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/cart">Your Cart</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer-section">
            <h5>Contact Information</h5>
            <address>
              123 Shopping Lane
              <br />
              Retail City, RC 12345
              <br />
              <a href="tel:+1234567890">(123) 456-7890</a>
              <br />
              <a href="mailto:info@coolshoppingcartapp.com">
                info@coolshoppingcartapp.com
              </a>
            </address>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p>
            &copy; {currentYear} Cool Shopping Cart App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
