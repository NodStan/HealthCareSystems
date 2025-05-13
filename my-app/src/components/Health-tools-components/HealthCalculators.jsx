import React, {useState} from 'react';
import './HealthCalculators.css'; // Import the CSS file
import './BMICalculator.css';
import BMICalculator from './BMICalculator';
import HeartrateZone from './HeartrateZone';

const HealthCalculators = () => {
  return (
    <div className="health-calculators-container">
      <h1 className="health-calculators-title">Health Calculators</h1>
      <p className="health-calculators-description">
        Useful tools to calculate important health metrics and track your progress.
      </p>
<div className='mee'>
<BMICalculator/>
<HeartrateZone/>
</div>

    </div>
  );
};
export default HealthCalculators;

