import React from 'react';

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Cool Shopping Cart App</h5>
            <p>
              Our Cool Shopping Cart App offers a wide variety of products at
              competitive prices. Discover deals and save on your favorite
              items.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="/cart" className="text-white">
                  Your Cart
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Information</h5>
            <address>
              123 Shopping Lane
              <br />
              Retail City, RC 12345
              <br />
              <a href="tel:+1234567890" className="text-white">
                (123) 456-7890
              </a>
              <br />
              <a
                href="mailto:info@coolshoppingcartapp.com"
                className="text-white"
              >
                info@coolshoppingcartapp.com
              </a>
            </address>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-3">
            <p>
              &copy; {currentYear} Cool Shopping Cart App. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
