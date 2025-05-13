// MedicationTracker.jsx
import React from 'react';
import './MedicationTracker.css'; // Your custom CSS

const MedicationTracker = () => {
  return (
    <div className="medication-header-container">
      <div className="medication-header-text">
        <h1 className="medication-title">Medication Tracker</h1>
        <p className="medication-subtitle">
          Track and manage your medications, set reminders, and monitor adherence
        </p>
      </div>

      <div className="medication-buttons">
        <button className="btn btn-outline">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          Reminders
        </button>

        <button className="btn btn-primary">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          Add Medication
        </button>
      </div>
    </div>
  );
};

export default MedicationTracker;
