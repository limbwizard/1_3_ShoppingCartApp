import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store'; // Adjust the path if needed
import './navBar.scss';

interface NavBarProps {
  // Add any props your NavBar might need later
}

const NavBar: React.FC<NavBarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Cool Shopping Cart App
        </Link>

        {/* Hamburger menu for smaller screens */}
        <button className="navbar-toggler" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/products" className="nav-link" onClick={toggleMenu}>
            Products
          </NavLink>
          <NavLink to="/cart" className="nav-link" onClick={toggleMenu}>
            Cart
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={toggleMenu}>
            Contact
          </NavLink>

          {/* Conditional Login/Logout and Profile link */}
          {user ? (
            <>
              <NavLink to="/profile" className="nav-link" onClick={toggleMenu}>
                Profile
              </NavLink>
              <button
                className="nav-link btn btn-light"
                // onClick={/* Logout logic */}
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className="nav-link" onClick={toggleMenu}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
