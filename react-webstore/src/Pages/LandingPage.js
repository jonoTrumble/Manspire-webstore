import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Manspire</h1>
        <p>Discover our exclusive collection of rings, bracelets, and chains.</p>
        <Link to="/rings" className="shop-now-btn">Shop Now</Link>
      </div>
    </div>
  );
};

export default LandingPage;
