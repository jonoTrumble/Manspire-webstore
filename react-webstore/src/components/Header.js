// components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Custom CSS for specific tweaks
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import logo from '../Images/Manspire-logo.png';

const Header = ({ loggedInUser }) => { // Accept loggedInUser as a prop
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-light bg-white">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left side: Burger menu */}
          <div className="d-flex align-items-center">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {isMenuOpen && (
              <div className="dropdown-menu custom-dropdown show">
                <Link
                  className="dropdown-item custom-dropdown-item"
                  to="/rings"
                  onClick={toggleMenu}
                >
                  Rings
                </Link>
                <Link
                  className="dropdown-item custom-dropdown-item"
                  to="/bracelets"
                  onClick={toggleMenu}
                >
                  Bracelets
                </Link>
                <Link
                  className="dropdown-item custom-dropdown-item"
                  to="/chains"
                  onClick={toggleMenu}
                >
                  Chains
                </Link>
              </div>
            )}
          </div>

          {/* Center: Logo */}
          <div className="d-flex justify-content-center">
            <Link to="/" className="navbar-brand mx-auto">
              <img
                src={logo}
                alt="Manspire Logo"
                className="logo-image"
              />
            </Link>
          </div>

          {/* Right side: Icons and username display */}
          <div className="d-flex align-items-center">
            {loggedInUser ? (
              <span className="me-3">Welcome, {loggedInUser}</span>
            ) : (
              <Link to="/Register" className="icon me-3">
                <i className="fas fa-user"></i>
              </Link>
            )}
            <Link to="/cart" className="icon">
              <i className="fas fa-shopping-bag"></i>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
