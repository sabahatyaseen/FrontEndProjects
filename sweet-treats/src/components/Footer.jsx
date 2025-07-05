// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo and tagline */}
      <div className="footer-brand">
        <h2>SweetTreats</h2>
        <p>Freshly baked happiness delivered to your door.</p>
      </div>

      {/* Navigation links */}
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Social icons (placeholder) */}
      <div className="footer-social">
        <h4>Follow Us</h4>
        <div className="icons">
          <a href="#"><span>📘</span></a>
          <a href="#"><span>📸</span></a>
          <a href="#"><span>🐦</span></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SweetTreats Bakery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
