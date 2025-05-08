import React from 'react'
import './HealthDashboard.css'
import { Link } from 'react-router-dom'

const HealthDashboard = () => {
  return (
    <div>
      <div className="my-health-header">
      <div className="header-text">
        <h1 className="title">My Health</h1>
        <p className="subtitle">Your personalized health dashboard and recommendations</p>
      </div>
      <div className="toggle-group" role="group" dir="ltr" tabIndex={0}>
        <button
          type="button"
          className="toggle-button"
          aria-checked="false"
          role="radio"
          aria-label="Toggle daily"
        >
          Daily
        </button>
        <button
          type="button"
          className="toggle-button active"
          aria-checked="true"
          role="radio"
          aria-label="Toggle weekly"
        >
          Weekly
        </button>
        <button
          type="button"
          className="toggle-button"
          aria-checked="false"
          role="radio"
          aria-label="Toggle monthly"
        >
          Monthly
        </button>
      </div>
    </div>
    <div className="grid-container">
      <Link to="/mood-tracker">
        <div className="card">
          <div className="card-content">
            <div className="card-inner">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="smile-plus-icon">
                  <path d="M22 11v1a10 10 0 1 1-9-10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                  <path d="M16 5h6" />
                  <path d="M19 2v6" />
                </svg>
              </div>
              <div className="title-wrapper">
                <h3 className="title">Mood Tracker</h3>
                <span className="badge">New</span>
              </div>
              <p className="description">
                Log your daily mood and track patterns over time
              </p>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/medication-tracker">
        <div className="card">
          <div className="card-content">
            <div className="card-inner">
              <div className="icon-circle">
                {/* <ThermometerIcon className="icon" /> */}
              </div>
              <div className="title-wrapper">
                <h3 className="title">Medication Tracker</h3>
              </div>
              <p className="description">
                Manage your medications and set reminders
              </p>
            </div>
          </div>
        </div>
      </Link>
      </div>
    </div>
  )
}

export default HealthDashboard