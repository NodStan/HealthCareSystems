import React from 'react'
import './NutritionGuide.css'
import { useDarkMode } from '../DarkModeContext';

const NutritionGuide = () => {
  return (
    <div className="nutrition-guide-container">
      <h1 className="nutrition-guide-heading">
        Nutrition Guide
      </h1>
      <p className="nutrition-guide-description">
        Discover personalized nutrition recommendations, healthy recipes, and expert dietary guidance for optimal health.
      </p>
    </div>
  )
}

export default NutritionGuide;