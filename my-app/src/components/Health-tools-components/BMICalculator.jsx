import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
  const [unit, setUnit] = useState('metric');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleReset = () => {
    setUnit('metric');
    setWeight('');
    setHeight('');
  };

  const handleCalculate = () => {
    if (!weight || !height) return alert('Please enter both weight and height.');
    const w = parseFloat(weight);
    const h = parseFloat(height);

    let bmi = 0;
    if (unit === 'metric') {
      bmi = w / ((h / 100) * (h / 100));
    } else {
      bmi = (w / (h * h)) * 703;
    }

    alert(`Your BMI is ${bmi.toFixed(2)}`);
  };

  return (
    <div className="calculator-card" style={{background: "white", height: "100%"}}>
      <div className="bmi-card-header">
        <h3 className="bmi-card-title">BMI Calculator</h3>
        <p className="bmi-card-description">Calculate your Body Mass Index</p>
      </div>
      <div className="bmi-card-content">
        <div className="bmi-form-group">
          <label className='unitt'>Unit System</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="metric"
                checked={unit === 'metric'}
                onChange={() => setUnit('metric')}
              />
              Metric (kg/cm)
            </label>
            <label>
              <input
                type="radio"
                value="imperial"
                checked={unit === 'imperial'}
                onChange={() => setUnit('imperial')}
              />
              Imperial (lb/ft)
            </label>
          </div>
        </div>

        <div className="bmi-form-group">
          <label className='unitt' htmlFor="weight">Weight ({unit === 'metric' ? 'kg' : 'lb'})</label>
          <input
          className='inputtttt'
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={`Enter weight in ${unit === 'metric' ? 'kilograms' : 'pounds'}`}
          />
        </div>

        <div className="bmi-form-group">
          <label className='unitt' htmlFor="height">Height ({unit === 'metric' ? 'cm' : 'ft'})</label>
          <input
           className='inputtttt'
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={`Enter height in ${unit === 'metric' ? 'centimeters' : 'feet'}`}
          />
        </div>

        <div className="info-boxes">
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
      className="info-icon"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
          <p style={{width: "100%",height: "auto", textAlign: "left", color: "#1D4ED8"}}>BMI is a screening tool but it does not directly measure body fat. Consult a healthcare provider for a complete health assessment.</p>
        </div>
      </div>

      <div className="card-footerrr">
        <button className="btn secondary" onClick={handleReset}>Reset</button>
        <button className="btn primary" onClick={handleCalculate}>Calculate BMI</button>
      </div>
    </div>
  );
};

export default BMICalculator;
