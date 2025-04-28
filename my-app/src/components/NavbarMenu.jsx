import React from 'react';
import './NavbarMenu.css'; // We'll update CSS too

const NavbarMenu = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-menu open"> {/* Always visible */}
        <a href="/" className="nav-link active">Home</a>
        <a href="/articles" className="nav-link">Health Topics</a>
        <a href="/health-search" className="nav-link">Search Conditions</a>

        <div className="nav-section-title">Health Tools</div>
        <div className="nav-submenu">
          <a href="/symptom-checker" className="nav-sublink">Symptom Checker</a>
          <a href="/health-calculators" className="nav-sublink">Health Calculators</a>
          <a href="/nutrition-guide" className="nav-sublink">Nutrition Guide</a>
          <a href="/exercise-library" className="nav-sublink">Exercise Library</a>
          <a href="/emergency-guide" className="nav-sublink">Emergency Guide</a>
        </div>

        <div className="nav-section-title">My Health</div>
        <div className="nav-submenu">
          <a href="/my-health" className="nav-sublink">Health Dashboard</a>
          <a href="/medication-tracker" className="nav-sublink">Medication Tracker</a>
          <a href="/telehealth" className="nav-sublink">TeleHealth</a>
        </div>

        <a href="/community-forum" className="nav-link">Community</a>
        <a href="/profile" className="nav-link">Profile</a>

        <button className="signout-button">Sign out</button>
      </div>
    </div>
  );
};

export default NavbarMenu;
