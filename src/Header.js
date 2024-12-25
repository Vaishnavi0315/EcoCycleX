// src/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';
import logo from './logo.png'; // Ensure you have logo.png in src directory

const Header = () => {
  const [resourceDropdownOpen, setResourceDropdownOpen] = useState(false);
  const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);

  let timeoutId;

  const toggleResourceDropdown = () => {
    setResourceDropdownOpen(!resourceDropdownOpen);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setResourceDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setResourceDropdownOpen(false);
    }, 200); // adjust the delay time as needed
  };
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
        <h1>Ec</h1>
          <img src={logo} alt="SF" />
          <h1>CycleX</h1>
        </div>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/HomePage.js">Home</Link></li>
          
          <li 
        className="dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span 
          className="dropdown-title" 
          onClick={toggleResourceDropdown}
        >
          Resource Management
        </span>
        {resourceDropdownOpen && (
          <ul 
            className="dropdown-menu" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* <li><Link to="/frr.js">Food Recovery and Redistribution management</Link></li> */}
            <li><Link to="/financial.js">Financial management</Link></li>
            {/* <li><Link to="/inventory.js">Inventory management</Link></li> */}
            <li><Link to="/fsp.js">Food Storage and Preservation management</Link></li>
          </ul>
        )}
      </li>
      <li><Link to="/components/SustainabilityAndBiodiversity.js">Sustainability Metrics & Reporting</Link></li>
      <li 
        className="dropdown"
        onMouseEnter={() => setCommunityDropdownOpen(true)}
        onMouseLeave={() => setCommunityDropdownOpen(false)}
      >
        <span className="dropdown-title">Community & Collaboration</span>
        {communityDropdownOpen && (
          <ul className="dropdown-menu">
            <li><Link to="/OSS.js">Open Source Search</Link></li>
            <li><Link to="/Eos.js">Ecosystem of Solutions</Link></li>
            <li><Link to="/Forums.js">Forums</Link></li>
            {/* <li><Link to="/Ms.js">Messaging System</Link></li> */}
            <li><Link to="/Ct.js">Collaboration Tools</Link></li>
          </ul>
        )}
      </li>
      <li><Link to="/components/FoodEcosystemMapping.js">Food-Eco Mapping</Link></li>
          
          <li><Link to="/EducationalResources.js">Educational Resources</Link></li>
          <li><Link to="/Login.js">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
