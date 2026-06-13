import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../App.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Shrusara Logo" className="logo-img" />
      </div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/bridal" className={({ isActive }) => (isActive ? 'active' : '')}>Bridal</NavLink>
        <NavLink to="/designer" className={({ isActive }) => (isActive ? 'active' : '')}>Designer</NavLink>
        <NavLink to="/kids" className={({ isActive }) => (isActive ? 'active' : '')}>Kids</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
      </div>
      <div className="nav-actions">
        <button className="btn-call-now">Call Now</button>
        <button className="btn-whatsapp">Book on WhatsApp</button>
      </div>
    </nav>
  );
};

export default Header;
