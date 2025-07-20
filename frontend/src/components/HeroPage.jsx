import React from 'react';
import { Link } from 'react-router-dom';
import './HeroPage.css';

const HeroPage = () => {
  return (
    <div className="hero-container">
      {/* Navigation */}
      <nav className="hero-nav">
        <div className="nav-brand">DataViz Pro</div>
        <div className="nav-links">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Signup</Link>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Transform Excel Data into Powerful Visualizations</h1>
          <p className="hero-description">
            DataViz Pro converts your spreadsheet data into beautiful, interactive charts and graphs 
            with just a few clicks. Get actionable insights from your Excel files instantly.
          </p>
          <div className="hero-cta">
            <Link to="/dashboard" className="cta-button">Get Started Free</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://cdn.prod.website-files.com/59e16042ec229e00016d3a66/64389b816c805d102971292f_ultimate%20guide%20to%20data%20visualization_blog%20hero.webp" alt="Data Visualization Example" />
        </div>
      </div>

      {/* Footer */}
      <footer className="hero-footer">
        <div className="footer-content">
          <p>© 2025 DataViz Pro. All rights reserved.</p>
          <div className="footer-links">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="#">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroPage;