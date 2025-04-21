import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { useDarkMode } from './DarkModeContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const { darkMode, toggleTheme } = useDarkMode();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => {
    setDialogOpen(false);
    setQuery('');
  };

  const isActive = (path) => location.pathname === path;
  const isHealthToolsActive = () =>
    [
      '/symptom-checker',
      '/health-calculators',
      '/nutrition-guide',
      '/exercise-library',
      '/emergency-guide',
    ].some((toolPath) => location.pathname.startsWith(toolPath));

  // Dummy search results for demonstration
  const suggestions = [
    'Cardiovascular Health',
    'Diabetes Management',
    'Mental Health',
    'Nutrition & Diet',
    'Fitness & Exercise',
    'Preventive Care',
  ];

  // Filter results based on query
  const filteredSuggestions = suggestions.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
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
                <Link to="/" className={`nav-link ${isActive('/') ? 'active-link' : ''}`}><p>Home</p></Link>
                <Link to="/articles" className={`nav-link ${isActive('/articles') ? 'active-link' : ''}`}><p>Health Topics</p></Link>
                <Link to="/health-search" className={`nav-link ${isActive('/health-search') ? 'active-link' : ''}`}><p>Search Conditions</p></Link>

                <div className={`dropdown ${isHealthToolsActive() ? 'active-links' : ''}`}>
                  <p className="navs-link dropdown-trigger">Health Tools</p>
                  <div className="dropdown-menu">
                    <Link to="/symptom-checker" className="dropdown-item">Symptom Checker</Link>
                    <Link to="/health-calculators" className="dropdown-item">Health Calculators</Link>
                    <Link to="/nutrition-guide" className="dropdown-item">Nutrition Guide</Link>
                    <Link to="/exercise-library" className="dropdown-item">Exercise Library</Link>
                    <Link to="/emergency-guide" className="dropdown-item">Emergency Guide</Link>
                  </div>
                </div>

                <Link to="/community-forum" className={`nav-link ${isActive('/community-forum') ? 'active-link' : ''}`}><p>Community</p></Link>
              </div>
            </div>

            <div className="header-right">
              <div className="search-container" onClick={openDialog}>
                <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>

              <button type="button" aria-pressed="false" aria-label="Toggle theme" className="theme-toggle" onClick={toggleTheme}>
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="moon-icon">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                )}
              </button>

              <Link to="/signin" className="signin-button">Sign in</Link>

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
      <div className={`mobile-menu ${menuOpen ? 'open' : ''} ${darkMode ? 'dark-mode' : ''}`}>
        <div className="mobile-menu-top">
          <Link to="/" className="logo-link">
            <span className="logo-primary">Health</span>
            <span className="logo-secondary">Hub</span>
          </Link>

          <div className="mobile-icons">
            <button type="button" aria-pressed="false" aria-label="Toggle theme" className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="night-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              )}
            </button>

            <div className="search-container" onClick={openDialog}>
              <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>

            <button className="mobile-close" onClick={closeMenu}>X</button>
            <Link to="/signin" className="mobile-signin-button">Sign in</Link>
          </div>
        </div>

        <nav className="mobile-nav">
          <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active-link' : ''}`}>Home</Link>
          <Link to="/articles" className={`mobile-nav-link ${isActive('/articles') ? 'active-link' : ''}`}>Health Topics</Link>
          <Link to="/health-search" className={`mobile-nav-link ${isActive('/health-search') ? 'active-link' : ''}`}>Search Conditions</Link>

          <div className={`mobile-nav-link ${isHealthToolsActive() ? 'active-link' : ''}`}>Health Tools</div>
          <Link to="/symptom-checker" className="mobile-sub-link">Symptom Checker</Link>
          <Link to="/health-calculators" className="mobile-sub-link">Health Calculators</Link>
          <Link to="/nutrition-guide" className="mobile-sub-link">Nutrition Guide</Link>
          <Link to="/exercise-library" className="mobile-sub-link">Exercise Library</Link>
          <Link to="/emergency-guide" className="mobile-sub-link">Emergency Guide</Link>

          <Link to="/community-forum" className={`mobile-nav-link ${isActive('/community-forum') ? 'active-link' : ''}`}>Community</Link>
          <Link to="/signin" className="mobile-signin-button">Sign in</Link>
        </nav>
      </div>

      {/* Search Popup */}
      {dialogOpen && (
  <div className="search-popup-overlay">
    <div className="search-popup">
      <div className="popup-header">
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search health topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={closeDialog} className="close-popup"><svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-x h-4 w-4"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg></button>
        </div>
      </div>

      {/* Search Results */}
      <div className="search-results">
        <div className="topic-cover">
        <p className='topic'>Health Topics</p>
        </div>
        
        {filteredSuggestions.length > 0 ? (
          filteredSuggestions.map((suggestion, index) => (
            <div key={index} className="search-result-item">
              {suggestion}
            </div>
          ))
        ) : (
          <div className="no-results">No results found</div>
        )}
      </div>
    </div>
  </div>
)}


    </header>
  );
};

export default Header;
