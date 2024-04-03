import React from 'react';

// Extracting the current year to avoid recalculating it on every render
const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h5>About Cool Shopping Cart App</h5>
          <p>
            Our Cool Shopping Cart App offers a wide variety of products at
            competitive prices. Discover deals and save on your favorite items.
          </p>
        </div>
        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/cart">Your Cart</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
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
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Cool Shopping Cart App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
