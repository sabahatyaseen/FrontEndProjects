// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__logo">SweetTreats</div>

      <nav className={`navbar__links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </nav>

      <div className="navbar__toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Navbar;
