import React, { useState } from 'react';
import './NutritionGuide.css';

export default function NutritionGuide() {
  const [activeTab, setActiveTab] = useState('resources');

  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">Nutrition Guide</h1>
          <p className="subtitle">
            Discover personalized nutrition recommendations, healthy recipes,
            and expert dietary guidance for optimal health.
          </p>
        </div>

        <div className="tabs">
          <div className="tab-list">
            <button
              className={`tab-trigger ${activeTab === 'resources' ? 'active' : ''}`}
              onClick={() => setActiveTab('resources')}
            >
              Nutrition Resources
            </button>
            <button
              className={`tab-trigger ${activeTab === 'recipes' ? 'active' : ''}`}
              onClick={() => setActiveTab('recipes')}
            >
              Healthy Recipes
            </button>
          </div>

          {activeTab === 'resources' && (
            <div className="tab-content">
              <div className="card-grid">
                <div className="card">
                  <div className="card-header">
                    <div className="icon salad-icon"></div>
                    <h3 className="card-title">Meal Planning</h3>
                  </div>
                  <div className="card-content">
                    <p>Get personalized meal plans based on your health goals</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <div className="icon book-icon"></div>
                    <h3 className="card-title">Nutrition Education</h3>
                  </div>
                  <div className="card-content">
                    <p>Learn about balanced diets and healthy eating habits</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <div className="icon search-icon"></div>
                    <h3 className="card-title">Ingredient Search</h3>
                  </div>
                  <div className="card-content">
                    <p>Explore the nutritional value of your favorite foods</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'recipes' && (
            <div className="tab-content">
              <p>Recipe content goes here...</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
export default NutritionGuide;