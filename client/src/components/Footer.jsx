import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <NavLink to="/about" className="footer-link">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/FAQ" className="footer-link">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/TOS" className="footer-link">Terms of Service</NavLink>
          </li>
          <li>
            <NavLink to="/PP" className="footer-link">Privacy Policy</NavLink>
          </li>
        </ul>
        <p>© 2024 HoopsMarket - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
