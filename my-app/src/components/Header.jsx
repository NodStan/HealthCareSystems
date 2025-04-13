import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import search from '../assets/search.png';
import sun from '../assets/sun.png';

const Header = () => {
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
            <div className="nav-links">
              <a href="/" className="nav-link active">Home</a>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
            </div>
            <button type="button" aria-pressed="false" aria-label="Toggle theme" class="theme-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                <span class="sr-only">Toggle theme</span>
            </button>
            {/* <button className="icon-button theme-toggle" aria-label="Toggle theme">
              <i className="icon-sun" />
              <span className="sr-only">Toggle theme</span>
            </button> */}
            <a href="/?auth=login" className="signin-button">Sign in</a>
          </div>
        </div>
      </div>
    </nav>
    </header>
   
  );
};

export default Header;