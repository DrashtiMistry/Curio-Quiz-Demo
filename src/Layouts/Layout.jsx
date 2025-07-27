import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-root">
      <nav className="main-navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src="https://www.curioteach.com/CURIOTRANSPARENT1.svg" alt="Curio Logo" className="navbar-logo-img" />
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/profile" className="navbar-link">
            <span role="img" aria-label="profile">👤</span> Profile
          </Link>
          <button className="theme-toggle-btn">
            <span role="img" aria-label="toggle theme">☀️</span>
          </button>
        </div>
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout; 