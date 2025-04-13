import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <svg className="hero-shape" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>

        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-heading">
              <span className="block">Your health,</span>
              <span className="highlighted">personalized</span>
            </h1>
            <p className="hero-description">
              HealthHub provides reliable health information and personalized recommendations based on your unique health profile. Take control of your wellbeing today.
            </p>

            <div className="hero-features">
              <div className="feature-item">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span>Evidence-based health information</span>
              </div>
              <div className="feature-item">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span>Personalized wellness recommendations</span>
              </div>
              <div className="feature-item">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span>Track medications and symptoms</span>
              </div>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start slide-up delay-300">
  <div className="rounded-md shadow">
    <a
      href="/health-search"
      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10 transition-all duration-300"
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
        className="lucide lucide-search w-5 h-5 mr-2"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
      Search Conditions
    </a>
  </div>

  <div className="mt-3 sm:mt-0 sm:ml-3">
    <a
      href="/get-started"
      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-all duration-300"
    >
      Get Started
    </a>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
