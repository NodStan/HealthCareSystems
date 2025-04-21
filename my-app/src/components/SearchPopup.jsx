// SearchPopup.jsx
import React, { useState } from 'react';
import './Header.css'; 

const SearchPopup = ({ onClose }) => {
  const [query, setQuery] = useState('');

  // Dummy search suggestions
  const suggestions = [
    'Cardiovascular Health',
    'Diabetes Management',
    'Mental Health',
    'Nutrition & Diet',
    'Fitness & Exercise',
    'Preventive Care',
  ];

  // Filter suggestions based on the query
  const filteredSuggestions = suggestions.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-popup-overlay">
      <div className="search-popup">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search health conditions..."
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            spellCheck="false"
          />
        </div>

        <div className="suggestions-list">
          {filteredSuggestions.map((item, index) => (
            <div key={index} className="suggestion-item">
              {item}
            </div>
          ))}
        </div>

        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SearchPopup;
