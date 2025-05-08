import React, { useState } from "react";
import "./HealthCard.css";
import HealthCard from "./HealthCard";  // Import the HealthCard component

const HealthCardTab = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabContent = {
    overview: <HealthCard />,
    symptoms: (
      <div className="symptoms-section">
        <h3 className="card-title font-semibold tracking-tight text-xl text-foreground flex items-center gap-2 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          Symptoms
        </h3>
        <ul className="symptoms-list">
        <li>
  <svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg>
  Chest pain or discomfort
</li>
          <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Shortness of breath</li>
          <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Fatigue and weakness</li>
          <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Irregular heartbeat</li>
          <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Dizziness or light-headedness</li>
        </ul>
      </div>
    ),
    causes: (<div className="symptoms-section">
      <h3 className="card-title font-semibold tracking-tight text-xl text-foreground flex items-center gap-2 transition-colors duration-300">
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
            className="icons"
          >
            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
          </svg>
        Causes
      </h3>
      <ul className="symptoms-list">
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> High blood pressure</li>
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> High cholesterol</li>
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Smoking</li>
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Diabetes</li>
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Family history</li>
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Age</li>
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Stress</li>
      </ul>
    </div>),
    prevention: (<div className="symptoms-section">
      <h3 className="card-title font-semibold tracking-tight text-xl text-foreground flex items-center gap-2 transition-colors duration-300">
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
    className="icons"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
        Prevention
      </h3>
      <ul className="symptoms-list">
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Regular exercise</li>
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Healthy diet low in salt, sugar and fat</li>
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Maintaining healthy weight</li>
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Not smoking</li>
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Limiting alcohol consumption</li>
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Regular health checkups</li>
      </ul>
    </div>),
    treatment: (<div className="symptoms-section">
      <h3 className="card-title font-semibold tracking-tight text-xl text-foreground flex items-center gap-2 transition-colors duration-300">
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
            className="icons"
          >
            <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path>
            <path d="m8.5 8.5 7 7"></path>
          </svg>
        Treatment
      </h3>
      <ul className="symptoms-list">
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Lifestyle changes</li>
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Medications like statins, blood thinners</li>
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Surgical procedures in some cases</li>
        <li><svg width="15" height="15" viewBox="0 0 24 24" fill="black" style={{ marginRight: "8px" }}>
    <circle cx="12" cy="12" r="6" />
  </svg> Cardiac rehabilitation programs</li>
      </ul>
    </div>),
  };

  return (
    <div className="health-cards">
      <div className="card-header">
        <h3 className="card-title">Cardiovascular Health</h3>
        <p className="card-description">
          Learn about heart disease, high blood pressure, and ways to maintain cardiovascular health.
        </p>
      </div>
      <div role="tablist" aria-orientation="horizontal" className="tabs-container">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "overview"}
          onClick={() => handleTabClick("overview")}
          className={`tab ${activeTab === "overview" ? "active" : ""}`}
        >
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
            className="icons"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <span className="tab-label">Overview</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "symptoms"}
          onClick={() => handleTabClick("symptoms")}
          className={`tab ${activeTab === "symptoms" ? "active" : ""}`}
        >
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
            className="icons"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" x2="12" y1="8" y2="12"></line>
            <line x1="12" x2="12.01" y1="16" y2="16"></line>
          </svg>
          <span className="tab-label">Symptoms</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "causes"}
          onClick={() => handleTabClick("causes")}
          className={`tab ${activeTab === "causes" ? "active" : ""}`}
        >
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
            className="icons"
          >
            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
          </svg>
          <span className="tab-label">Causes</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "prevention"}
          onClick={() => handleTabClick("prevention")}
          className={`tab ${activeTab === "prevention" ? "active" : ""}`}
        >
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
    className="icons"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
          <span className="tab-label">Prevention</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "treatment"}
          onClick={() => handleTabClick("treatment")}
          className={`tab ${activeTab === "treatment" ? "active" : ""}`}
        >
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
            className="icons"
          >
            <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path>
            <path d="m8.5 8.5 7 7"></path>
          </svg>
          <span className="tab-label">Treatment</span>
        </button>
      </div>
      {tabContent[activeTab]}
    </div>
  );
};

export default HealthCardTab;
