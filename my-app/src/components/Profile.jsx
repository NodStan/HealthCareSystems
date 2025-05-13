import React, { useState, useEffect } from 'react';
import './Profile.css';

const Toast = ({ message, show }) => {
  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      {message}
    </div>
  );
};

const Profile = () => {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);
  const [bmi, setBmi] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const calculatedBmi = weight / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi.toFixed(1));
    }
  }, [height, weight]);

  const initialConditions = {
    Hypertension: false,
    'Diabetes Type 1': false,
    'Diabetes Type 2': false,
    Asthma: false,
    'Heart Disease': false,
    Allergies: false,
    Arthritis: false,
    'Chronic Pain': false,
    'Thyroid Issues': false,
    Anxiety: false,
    Depression: false,
    Migraine: false,
    Insomnia: false,
  };

  const [selectedConditions, setSelectedConditions] = useState(initialConditions);
  const [customConditions, setCustomConditions] = useState([]);
  const [condition, setCondition] = useState('');

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setSelectedConditions((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const handleChange = (event) => {
    setCondition(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (condition && !customConditions.includes(condition)) {
      setCustomConditions((prev) => [...prev, condition]);
    }
    setCondition('');
  };

  const removeCondition = (conditionToRemove) => {
    if (selectedConditions.hasOwnProperty(conditionToRemove)) {
      setSelectedConditions((prev) => ({
        ...prev,
        [conditionToRemove]: false,
      }));
    } else {
      setCustomConditions((prev) => prev.filter((c) => c !== conditionToRemove));
    }
  };

  const [hasFamilyHistory, setHasFamilyHistory] = useState(false);

  const handleCheckboxChanges = () => {
    setHasFamilyHistory((prev) => !prev);
  };

  const handleSave = () => {
    console.log('Profile saved');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide after 3 seconds
  };

  const checkedConditions = Object.keys(selectedConditions).filter((key) => selectedConditions[key]);

  return (
    <div className="profile-background">
      <Toast message="Health profile saved successfully!" show={showToast} />
      <div className="profile-container">
        <div className="health-header">
          <h1 className="health-title">Health Profile</h1>
          <p className="health-subtitle">
            Complete your health profile to receive personalized recommendations
          </p>
        </div>

        <div className="basic-info">
          <h2 className="section-title">Basic Information</h2>
          <div className="form-grid">
            <div>
              <label htmlFor="age" className="form-label">Age</label>
              <input type="number" id="age" defaultValue="30" min="1" max="120" required className="form-input" />
            </div>
            <div>
              <label htmlFor="gender" className="form-label">Gender</label>
              <select id="gender" required className="form-input">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>
        </div>

        <div className="profile-measurements">
          <h2 className="section-title">Physical Measurements</h2>
          <div className="measurements-grid">
            <div className="input-group">
              <label htmlFor="height" className="input-label">Height (cm)</label>
              <input type="number" id="height" value={height} onChange={(e) => setHeight(Number(e.target.value))} min="50" max="250" required className="input-field" />
            </div>
            <div className="input-group">
              <label htmlFor="weight" className="input-label">Weight (kg)</label>
              <input type="number" id="weight" value={weight} onChange={(e) => setWeight(Number(e.target.value))} min="1" max="500" step="0.1" required className="input-field" />
            </div>
            <div className="input-group">
              <label htmlFor="bmi" className="input-label">BMI (Calculated)</label>
              <input type="number" id="bmi" value={bmi} readOnly className="input-field readonly" />
              <p className="note">Automatically calculated from height and weight</p>
            </div>
          </div>
        </div>

        <div className="blood-info-section">
          <h2 className="blood-info-title">Blood Information</h2>
          <div className="blood-info-grid">
            <div className="blood-info-field">
              <label htmlFor="bloodType">Blood Type</label>
              <select id="bloodType" required>
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="blood-info-field">
              <label htmlFor="genotype">Genotype</label>
              <select id="genotype" required>
                <option value="">Select Genotype</option>
                <option value="AA">AA</option>
                <option value="AS">AS</option>
                <option value="SS">SS</option>
                <option value="AC">AC</option>
                <option value="SC">SC</option>
                <option value="CC">CC</option>
              </select>
            </div>

            <div className="blood-info-field">
              <label htmlFor="oxygenLevel">Oxygen (O₂) Level (%)</label>
              <input type="number" id="oxygenLevel" min="70" max="100" step="0.1" />
            </div>
          </div>
        </div>

        <div className="medical-conditions">
          <h2 className="section-title">Medical Conditions</h2>
          <p className="section-description">Select all conditions that apply to you:</p>
          <div className="conditions-grid">
            {Object.keys(selectedConditions).map((condition) => (
              <div key={condition} className="condition-item">
                <input
                  type="checkbox"
                  id={condition}
                  className="condition-checkbox"
                  checked={selectedConditions[condition]}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={condition} className="condition-label">{condition}</label>
              </div>
            ))}
          </div>

          <div className="add-condition-container mt-4">
            <label htmlFor="customCondition" className="text-sm font-medium text-gray-700 mb-1">
              Add other condition
            </label>
            <form className="flex" onSubmit={handleSubmit}>
              <input
                type="text"
                id="customCondition"
                placeholder="Enter condition name"
                value={condition}
                onChange={handleChange}
                className="condition-input"
              />
              <button type="submit" className="add-button">Add</button>
            </form>
          </div>

          {(checkedConditions.length > 0 || customConditions.length > 0) && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Selected conditions:</p>
              <div className="flex flex-wrap gap-2">
                {[...checkedConditions, ...customConditions].map((cond) => (
                  <div key={cond} className="tag">
                    {cond}
                    <button className="remove-tag" onClick={() => removeCondition(cond)}>×</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="profile-containers">
          <div className="flex">
            <input
              type="checkbox"
              id="hasFamilyHistory"
              className="checkbox"
              checked={hasFamilyHistory}
              onChange={handleCheckboxChanges}
            />
            <label htmlFor="hasFamilyHistory" className="checkbox-label">Family Medical History</label>
          </div>

          {hasFamilyHistory && (
            <div>
              <p className="text-sm text-gray-600 mb-2" style={{ color: '#4B5563' }}>
                Please provide information about significant medical conditions in your immediate family.
              </p>
              <textarea
                id="familyHistory"
                rows={4}
                placeholder="E.g., Mother had diabetes, Father with hypertension, etc."
                className="custom-textarea"
              />
            </div>
          )}
        </div>

        <div className="profile-containerss">
          <div className="button-container">
            <button type="submit" className="save-button" onClick={handleSave}>
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
                className="save-icon"
              >
                <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
                <path d="M7 3v4a1 1 0 0 0 1 1h7" />
              </svg>
              Save Health Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
