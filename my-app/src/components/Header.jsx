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
                <Link to="/" className="logo-link">
                  <span className="logo-primary">Health</span>
                  <span className="logo-secondary">Hub</span>
                </Link>
              </div>

              <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <Link to="/">
                  <p className="nav-linkss">Home</p>
                </Link>
                <Link to="/articles" className="nav-link">Health Topics</Link>
                <Link to="/health-search" className="nav-link">Search Conditions</Link>
                <div className="dropdown">
                  <p className="nav-link dropdown-trigger">Health Tools</p>
                  <div className="dropdown-menu">
                    <Link to="/symptom-checker" className="dropdown-item">Symptom Checker</Link>
                    <Link to="/health-calculators" className="dropdown-item">Health Calculators</Link>
                    <Link to="/nutrition-guide" className="dropdown-item">Nutrition Guide</Link>
                    <Link to="/exercise-library" className="dropdown-item">Exercise Library</Link>
                    <Link to="/emergency-guide" className="dropdown-item">Emergency Guide</Link>
                  </div>
                </div>
                <Link to="/community-forum" className="nav-link">Community</Link>
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
          <Link to="/" className="logo-link">
            <span className="logo-primary">Health</span>
            <span className="logo-secondary">Hub</span>
          </Link>
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
            </button>
            <div className="search-container">
              <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <button className="mobile-close" onClick={closeMenu}>X</button>
            <Link to="/signin" className="signin-button">Sign in</Link>
          </div>
        </div>

        <nav className="mobile-nav">
          <Link to="/" className="mobile-nav-link active">Home</Link>
          <Link to="/articles" className="mobile-nav-link">Health Topics</Link>
          <Link to="/health-search" className="mobile-nav-link">Search Conditions</Link>

          <div className="mobile-nav-link">Health Tools</div>
          <Link to="/symptom-checker" className="mobile-sub-link">Symptom Checker</Link>
          <Link to="/health-calculators" className="mobile-sub-link">Health Calculators</Link>
          <Link to="/nutrition-guide" className="mobile-sub-link">Nutrition Guide</Link>
          <Link to="/exercise-library" className="mobile-sub-link">Exercise Library</Link>
          <Link to="/emergency-guide" className="mobile-sub-link">Emergency Guide</Link>

          <div className="mobile-nav-link">Community</div>

          <a href="/?auth=login" className="mobile-signin-button">Sign in</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
