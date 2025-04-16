import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-container">
          <div className="header-inner">
            <div className="header-left">
              <div className="logo-container">
                <a href="/" className="logo-link">
                  <span className="logo-primary">Health</span>
                  <span className="logo-secondary">Hub</span>
                </a>
              </div>

              

              <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <a href="/" className="nav-linkss ">Home</a>
                <a href="/articles" className="nav-link">Health Topics</a>
                <a href="/health-search" className="nav-link">Search Conditions</a>
                <div className="dropdown">
                  <a className="nav-link dropdown-trigger">Health Tools</a>
                  <div className="dropdown-menu">
                    <a href="/symptom-checker" className="dropdown-item">Symptom Checker</a>
                    <a href="/health-calculators" className="dropdown-item">Health Calculators</a>
                    <a href="/nutrition-guide" className="dropdown-item">Nutrition Guide</a>
                    <a href="/exercise-library" className="dropdown-item">Exercise Library</a>
                    <a href="/emergency-guide" className="dropdown-item">Emergency Guide</a>
                  </div>
                </div>
                <a href="/community-forum" className="nav-link">Community</a>
              </div>
            </div>

            <div className="header-right">
              <div className="search-container">
                <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <button type="button" aria-pressed="false" aria-label="Toggle theme" className="theme-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
                <span className="sr-only">Toggle theme</span>
              </button>
              <a href="/?auth=login" className="signin-button">Sign in</a>
              <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="hamburger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-top">
            <a href="/" className="logo-link">
                <span className="logo-primary">Health</span>
                <span className="logo-secondary">Hub</span>
            </a>
          <div className="mobile-icons">
          <button type="button" aria-pressed="false" aria-label="Toggle theme" className="theme-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
                {/* <span className="sr-only">Toggle theme</span> */}
              </button>
            <div className="search-container">
                <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            <button className="mobile-close" onClick={closeMenu}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon-close" viewBox="0 0 24 24" fill="black" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" > 
                    <path d="M18 6 L6 18" />
                    <path d="M6 6 L18 18" />
                </svg> */}
                X
            </button>
            {/* <button className="icon-button theme-toggle" aria-label="Toggle theme">
              <i className="icon-sun" />
              <span className="sr-only">Toggle theme</span>
            </button> */}
            <a href="/?auth=login" className="signin-button">Sign in</a>
          </div>
        </div>

        <nav className="mobile-nav">
          <a href="/" className="mobile-nav-link active">Home</a>
          <a href="/articles" className="mobile-nav-link">Health Topics</a>
          <a href="/health-search" className="mobile-nav-link">Search Conditions</a>

          <div className="mobile-nav-link">Health Tools</div>
          <a href="/symptom-checker" className="mobile-sub-link">Symptom Checker</a>
          <a href="/health-calculators" className="mobile-sub-link">Health Calculators</a>
          <a href="/nutrition-guide" className="mobile-sub-link">Nutrition Guide</a>
          <a href="/exercise-library" className="mobile-sub-link">Exercise Library</a>
          <a href="/emergency-guide" className="mobile-sub-link">Emergency Guide</a>

          <div className="mobile-nav-link">Community</div>

          <a href="/?auth=login" className="mobile-signin-button">Sign in</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
