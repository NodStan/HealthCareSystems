import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarMenu.css'; // We'll update CSS too

const NavbarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Menu state (open or closed)

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <div className="navbar-container">
      <div className={`navbar-menu ${isMenuOpen ? 'open' : 'closed'}`}> {/* Toggle between open and closed */}
        <Link to="/" className="navv-link active" onClick={closeMenu}>Home</Link>
        <Link to="/articles" className="navv-link" onClick={closeMenu}>Health Topics</Link>
        <Link to="/health-search" className="navv-link" onClick={closeMenu}>Search Conditions</Link>

        <div className="nav-section-title">Health Tools</div>
        <div className="nav-submenu">
          <Link to="/symptom-checker" className="nav-sublink" onClick={closeMenu}>Symptom Checker</Link>
          <Link to="/health-calculators" className="nav-sublink" onClick={closeMenu}>Health Calculators</Link>
          <Link to="/nutrition-guide" className="nav-sublink" onClick={closeMenu}>Nutrition Guide</Link>
          <Link to="/exercise-library" className="nav-sublink" onClick={closeMenu}>Exercise Library</Link>
          <Link to="/emergency-guide" className="nav-sublink" onClick={closeMenu}>Emergency Guide</Link>
        </div>

        <div className="nav-section-title">My Health</div>
        <div className="nav-submenu">
          <Link to="/health-dashboard" className="nav-sublink" onClick={closeMenu}>Health Dashboard</Link>
          <Link to="/medication-tracker" className="nav-sublink" onClick={closeMenu}>Medication Tracker</Link>
          <Link to="/telehealth" className="nav-sublink" onClick={closeMenu}>TeleHealth</Link>
        </div>

        <Link to="/community-forum" className="navv-link" onClick={closeMenu}>Community</Link>
        <Link to="/profile" className="navv-link" onClick={closeMenu}>Profile</Link>

        <button className="signout-button" onClick={closeMenu}>Sign out</button>
      </div>
    </div>
  );
};

export default NavbarMenu;
