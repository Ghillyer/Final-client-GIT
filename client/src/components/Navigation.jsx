import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navigation.css'; 

const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); 
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
    alert('You have been logged out.');
  };

  return (
    <nav className="nav">
      <NavLink to="/Home" className="brand">HoopsMarket</NavLink>
      <ul>
        <li><NavLink to="/Home" className="nav-link"><button className="btn1">Home</button></NavLink></li>
        <li><NavLink to="/Listings" className="nav-link"><button className="btn1">Listings</button></NavLink></li>
        <li><NavLink to="/list-card" className="nav-link"><button className="btn1">List a Card</button></NavLink></li>
        <li className="menu-icon" onClick={toggleDropdown}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </li>
      </ul>
      {showDropdown && (
        <div className="dropdown">
          {isLoggedIn ? (
            <button className="dropdown-item" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <NavLink to="/Login" className="dropdown-item">Login</NavLink>
              <NavLink to="/Signup" className="dropdown-item">Signup</NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
