import React from 'react';
import './SymptomChecker.css';
import { motion } from 'framer-motion';
import { useDarkMode } from '../DarkModeContext';

const SymptomChecker = () => {
  const { darkMode: isDarkMode } = useDarkMode();
  return (
    <div className={`symptom-checker ${isDarkMode ? 'dark' : ''}`}>
      <motion.div 
        className="symptom-checker-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="symptom-checker-container">
          <h1 className="symptom-checker-title">Symptom Checker</h1>
          <p className="symptom-checker-description">
            Check your symptoms to find possible causes and treatments.
            This tool is for informational purposes and should not replace 
            professional medical advice.
          </p>
        </div>

        <motion.div 
          className="progress-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="progress-labels">
            <span>Start</span>
            <span>Symptoms</span>
            <span>Details</span>
            <span>Results</span>
          </div>

          <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="20"
          >
            <div
              className="progress-indicator"
              style={{ transform: 'translateX(-80%)' }}
            ></div>
          </div>
        </motion.div>

        <motion.div 
          className="emergency-card-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="emergency-card">
            <div className="cards-header">
              <div className="header-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="alert-icon"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <h3 className="card-titles">Emergency Warning</h3>
              </div>
              <div className="card-content">
              <p className="card-text">
                If you're experiencing severe chest pain, difficulty breathing,
                severe bleeding, or other life-threatening symptoms, please call
                emergency services (911) or go to the nearest emergency room immediately.
              </p>
            </div>
            </div>
            
          </div>
        </motion.div>

        <motion.div 
          className="symptom-checker-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="card">
            <div className="card-headers">
              <h3 className="card-titles">Step 1: Select Your Symptoms</h3>
              <p className="card-description">
                Choose the symptoms you're experiencing either by searching or selecting a body area.
              </p>
            </div>

            <div className="card-content">
              <div className="search-wrapper">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="search-icons"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg> */}
                <input
                  type="text"
                  placeholder="Search symptoms..."
                  className="search-input"
                />
              </div>

              <div>
                <label htmlFor="bodyPart" className="label">
                  Or select area of the body
                </label>
                <button type="button" className="select-trigger">
                  <span>Select body area</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="chevron-down"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </button>
              </div>

              <div className="symptom-options">
                <label className="label">Select all that apply:</label>
                <div className="symptom-grid">
                  {/* Symptom checkboxes will go here */}
                </div>
              </div>
            </div>

            <div className="card-footers">
              <button className="btn-outline">Clear All</button>
              <button className="btn-primary" disabled>Continue</button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SymptomChecker;
