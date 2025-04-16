import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import { Heart, Shield, Brain } from 'lucide-react';


function Hero() {
  return (
    <div className="hero-container">
        <div className="hero-wrapper">
            <div className="hero-content">

                {/* Hero Inner Content */}
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
                    {/* Features */}
                    <div className="feature-item">
                        <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0EA2F1" strokeWidth="2">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                        </svg>
                        <span>Evidence-based health information</span>
                    </div>
                    <div className="feature-item">
                        <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0EA2F1" strokeWidth="2">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                        </svg>
                        <span>Personalized wellness recommendations</span>
                    </div>
                    <div className="feature-item">
                        <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0EA2F1" strokeWidth="2">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                        </svg>
                        <span>Track medications and symptoms</span>
                    </div>

                    {/* Buttons */}
                    <div className="hero-buttons">
                        <div className="button-wrapper">
                        <a className="search-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                            </svg>
                            Search Conditions
                        </a>
                        </div>
                        <div className="button-wrapper secondary">
                        <a className="secondary-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0L6.41 10.54A2 2 0 0 1 4.49 12H2" />
                            </svg>
                            My Health
                        </a>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="hero-grid fade-in delay-400">
                        <div className="hero-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                        <p className="hero-label">Health Tracking</p>
                        </div>
                        <div className="hero-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M8 2v4" />
                            <path d="M16 2v4" />
                            <rect width="18" height="18" x="3" y="4" rx="2" />
                            <path d="M3 10h18" />
                        </svg>
                        <p className="hero-label">Medication Reminders</p>
                        </div>
                        <div className="hero-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        </svg>
                        <p className="hero-label">Emergency Guide</p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="cta-section">
                        <a className="cta-link">
                        <svg className="cta-icon-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        Create free account
                        <svg className="cta-icon-right" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>

                    </div>
                </div>
                </div>

                {/* Now the white SVG shape */}
                
                <div className="hero-section">
                    <img className="hero-image" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoJTIwY2hlY2t1cHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Doctor with patient"/>
                </div>
                {/* <svg className="hero-shape" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100"></polygon>
                </svg> */}
                
            </div>
        </div>
        <div className="health-topics-wrapper">
            <div className="health-topics-container">
            <Link to="/articles?category=cardiovascular" className="card-hover">
                <div className="card-content">
                <div className="icon-container">
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
                    className="lucide lucide-heart icon-heart"
                    >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                </div>
                <h3 className="card-title">Cardiovascular Health</h3>
                <p className="card-description">
                    Learn about heart disease, high blood pressure, and ways to maintain cardiovascular health.
                </p>
                </div>
                <div className="card-footer">
                <span className="explore-text">Explore →</span>
                </div>
            </Link>

            <Link to="/articles?category=diabetes" className="card-hover">
                <div className="card-content">
                <div className="icon-container">
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
                    className="lucide lucide-heart icon-heart"
                    >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                    </svg>
                </div>
                <h3 className="card-title">Diabetes Management</h3>
                <p className="card-description">
                    Information on managing diabetes, blood sugar monitoring, and healthy living strategies.
                </p>
                </div>
                <div className="card-footer">
                <span className="explore-text">Explore →</span>
                </div>
            </Link>

            <Link to="/articles?category=mental-health" className="card-hover">
                <div className="card-content">
                <div className="icon-container">
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
                    className="lucide lucide-heart icon-heart"
                    >
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                    </svg>
                </div>
                <h3 className="card-title">Mental Health</h3>
                <p className="card-description">
                    Resources for anxiety, depression, stress management, and overall mental wellbeing.
                </p>
                </div>
                <div className="card-footer">
                <span className="explore-text">Explore →</span>
                </div>
            </Link>

            <Link className="card-hover flex flex-col bg-white rounded-lg shadow-lg overflow-hidden" to="/articles?category=nutrition">
            <div className="card-content px-6 py-8 flex-1">
                <div className="icon-containers mbs-4 bg-health-light-blue rounded-full w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-apple h-8 w-8 text-health-blue">
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                    <path d="M10 2c1 .5 2 2 2 5"></path>
                </svg>
                </div>
                <h3 className="card-title text-xl font-bold text-gray-900 mb-2">Nutrition & Diet</h3>
                <p className="card-description text-gray-600">Expert advice on balanced diets, nutritional needs, and healthy eating habits.</p>
            </div>
            <div className="card-footers">
                <span className="explore-text">Explore →</span>
                </div>
            </Link>

            <Link className="card-hover flex flex-col bg-white rounded-lg shadow-lg overflow-hidden" to="/articles?category=fitness">
            <div className="card-content px-6 py-8 flex-1">
                <div className="icon-container mbs-4 bg-health-light-blue rounded-full w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dumbbell h-8 w-8 text-health-blue">
                    <path d="M14.4 14.4 9.6 9.6"></path>
                    <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path>
                    <path d="m21.5 21.5-1.4-1.4"></path>
                    <path d="M3.9 3.9 2.5 2.5"></path>
                    <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"></path>
                </svg>
                </div>
                <h3 className="card-title text-xl font-bold text-gray-900 mb-2">Fitness & Exercise</h3>
                <p className="card-description text-gray-600">Exercise recommendations, workout plans, and physical activity guidelines for all ages.</p>
            </div>
            <div className="card-footers">
                <span className="explore-text">Explore →</span>
                </div>
            </Link>

            <Link className="card-hover flex flex-col bg-white rounded-lg shadow-lg overflow-hidden" to="/articles?category=preventive-care">
            <div className="card-content px-6 py-8 flex-1">
                <div className="icon-container mbs-4 bg-health-light-blue rounded-full w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-shield h-8 w-8 text-health-blue">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                </div>
                <h3 className="card-title text-xl font-bold text-gray-900 mb-2">Preventive Care</h3>
                <p className="card-description text-gray-600">Information on screenings, vaccinations, and preventive measures for various health conditions.</p>
            </div>
            <div className="card-footers">
                <span className="explore-text">Explore →</span>
                </div>
            </Link>
            </div>
            </div>
            <div className="healthhub-container">
                <div className="text-center">
                    <h2 className="heading">Why Choose HealthHub?</h2>
                    <p className="subtext">
                    Our platform offers comprehensive health information and personalized recommendations.
                    </p>
                </div>

                <div className="features-grid">
                    <div className="feature-item1">
                    <div className="icon-wrapper">
                        <Heart className="icon" />
                    </div>
                    <h3 className="feature-title">Personalized Health Insights</h3>
                    <p className="feature-text">
                        Receive tailored health recommendations based on your unique health profile.
                    </p>
                    </div>

                    <div className="feature-item1">
                    <div className="icon-wrapper">
                        <Shield className="icon" />
                    </div>
                    <h3 className="feature-title">Secure Health Data</h3>
                    <p className="feature-text">
                        Your health information is protected with enterprise-grade security.
                    </p>
                    </div>

                    <div className="feature-item1">
                    <div className="icon-wrapper">
                        <Brain className="icon" />
                    </div>
                    <h3 className="feature-title">Expert-Verified Content</h3>
                    <p className="feature-text">
                    All health information is reviewed and verified by medical professionals.
                    </p>
                    </div>

                    <div className="feature-item1">
                    <div className="icon-wrapper">
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
                        className="lucide lucide-heart icon-heart"
                        >
                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                        </svg>
                    </div>
                    <h3 className="feature-title">Progress Tracking</h3>
                    <p className="feature-text">
                    Monitor improvements in your health metrics over time
                    </p>
                    </div>
                </div>
            </div>
            <div className="health-tools-container">
            <h2 className="health-tools-title">Powerful Health Tools</h2>
            <p className="health-tools-description">
                Discover our complete suite of tools designed to help you manage and improve your health.
            </p>
            </div>
            <div className="feature-grid-wrapper">
                <div className="feature-grid">
                <div className="feature-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pie-chart-icon">
                        <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    </svg>
                    <h3 className="feature-title">Health Calculators</h3>
                    <p className="feature-description"> Calculate key health metrics like BMI, calorie needs, target heart rate, and more.  </p>
                    <a href="/health-calculators" className="feature-link"> Try calculators 
                        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="arrow-right-icon"
            >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
            </svg>
            </a>
        </div>

        <div className="feature-card">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="file-text-icon"
            >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            <path d="M10 9H8"></path>
            <path d="M16 13H8"></path>
            <path d="M16 17H8"></path>
            </svg>
            <h3 className="feature-title">Symptom Checker</h3>
            <p className="feature-description">
            Identify possible causes of your symptoms and get guidance on next steps.
            </p>
            <a href="/symptom-checker" className="feature-link">
            Check symptoms <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="arrow-right-icon"
            >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
            </svg>
            </a>
        </div>

        <div className="feature-card">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="user-icon"
            >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <h3 className="feature-title">Personal Health Dashboard</h3>
            <p className="feature-description">
            Track your health journey with personalized recommendations and progress monitoring.
            </p>
            <a href="/dashboard" className="feature-link">
            View dashboard <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="arrow-right-icon"
            >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
            </svg>
            </a>
        </div>
                </div>
            </div>
            <div className="container">
            <div className="section-header">
                <h2>What Our Users Say</h2>
                <p>
                Real experiences from people who have transformed their health journey
                with HealthHub.
                </p>
            </div>

            <div className="testimonials-grid-wrapper">
            <div className="testimonials-grid">
                <div className="testimonial-card">
                <div className="user-info">
                    <div className="avatar blue">JD</div>
                    <div className="user-details">
                    <h4>John Doe</h4>
                    <p className="subtitle">Diabetes Management</p>
                    </div>
                </div>
                <p className="message">
                    "HealthHub helped me understand my diabetes better than any other
                    resource. The personalized recommendations have made managing my
                    condition so much easier."
                </p>
                </div>

                <div className="testimonial-card">
                <div className="user-info">
                    <div className="avatar green">MS</div>
                    <div className="user-details">
                    <h4>Maria Smith</h4>
                    <p className="subtitle">Heart Health</p>
                    </div>
                </div>
                <p className="message">
                    "After my heart attack, I was overwhelmed with information.
                    HealthHub curated exactly what I needed to know and tracked my
                    recovery progress."
                </p>
                </div>

                <div className="testimonial-card">
                <div className="user-info">
                    <div className="avatar blue">RJ</div>
                    <div className="user-details">
                    <h4>Robert Johnson</h4>
                    <p className="subtitle">Fitness Goals</p>
                    </div>
                </div>
                <p className="message">
                    "Using HealthHub, I’ve finally been able to stick to my fitness
                    goals. The app’s reminders and progress tracking keep me motivated
                    daily."
                </p>
                </div>
            </div>
            </div>
            </div>
            <div className="healthhub-container">
            <h2 className="healthhub-title">How HealthHub Works</h2>
            <p className="healthhub-description">
                Our simple process to help you achieve better health outcomes
            </p>
            </div>
            <div className="steps-wrapper">
            <div className="steps-container">
            <div className="steps-line"></div>
            <div className="steps-grid">
            <div className="step">
                <div className="step-number">1</div>
                <h3 className="step-title">Create Account</h3>
                <p className="step-description">
                Sign up and set up your personal health profile with key information.
                </p>
            </div>

            <div className="step">
                <div className="step-number">2</div>
                <h3 className="step-title">Get Personalized Plan</h3>
                <p className="step-description">
                Receive customized recommendations based on your health data.
                </p>
            </div>

            <div className="step">
                <div className="step-number">3</div>
                <h3 className="step-title">Track Progress</h3>
                <p className="step-description">
                Monitor your health improvements and adjust your plan as needed.
                </p>
            </div>

            <div className="step">
                <div className="step-number">4</div>
                <h3 className="step-title">Achieve Goals</h3>
                <p className="step-description">
                Reach your health targets and maintain your improved wellbeing.
                </p>
            </div>
            </div>
            </div>
            </div>
            <section className="call-to-action">
                <div className="cta-content">
                <h2 className="cta-title">Take control of your health today</h2>
                <p className="cta-subtitle">
                    Join thousands of users who have transformed their health journey with HealthHub.
                </p>
                <div className="cta-buttons">
                    <div className="button-wrapper">
                    <a href="/?auth=register" className="btn btn-primary">
                        Create free account
                    </a>
                    </div>
                    <div className="button-wrapper ml">
                    <a href="/articles" className="btn btn-secondary">
                        Browse health topics
                    </a>
                    </div>
                </div>
                </div>
            </section>
                <div className="footer-wrapper">
                <footer className="footer">
                <div className="top-footer">
                <div className="footer-logo-section">
                    <a href="/" className="footer-logo-link">
                    <span className="footer-logo-blue">Health</span>
                    <span className="footer-logo-green">Hub</span>
                    </a>
                    <p className="footer-description">
                    Comprehensive health information and personalized recommendations for your well-being.
                    </p>
                    <div className="footer-socials">
                    <a href="#" className="footer-social-link">
                        <span className="sr-only">Twitter</span>
                        <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675..."></path>
                        </svg>
                    </a>
                    <a href="#" className="footer-social-link">
                        <span className="sr-only">Facebook</span>
                        <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12..."></path>
                        </svg>
                    </a>
                    <a href="#" className="footer-social-link">
                        <span className="sr-only">Instagram</span>
                        <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06..."></path>
                        </svg>
                    </a>
                    </div>
                    </div>
                    <div className="footer-explore">
                <h3 className="footer-heading">Explore</h3>
                <ul className="footer-links">
                    <li>
                    <a href="/articles?category=cardiovascular" className="footer-link">
                        Cardiovascular Health
                    </a>
                    </li>
                    <li>
                    <a href="/articles?category=diabetes" className="footer-link">
                        Diabetes Management
                    </a>
                    </li>
                    <li>
                    <a href="/articles?category=mental-health" className="footer-link">
                        Mental Health
                    </a>
                    </li>
                    <li>
                    <a href="/articles?category=nutrition" className="footer-link">
                        Nutrition & Diet
                    </a>
                    </li>
                    <li>
                    <a href="/articles?category=fitness" className="footer-link">
                        Fitness & Exercise
                    </a>
                    </li>
                    <li>
                    <a href="/articles?category=preventive-care" className="footer-link">
                        Preventive Care
                    </a>
                    </li>
                </ul>
                    </div>
                    <div className="footer-quick-links">
                <h3 className="footer-heading">Quick Links</h3>
                <ul className="footer-links">
                    <li>
                    <a href="/" className="footer-link">
                        Home
                    </a>
                    </li>
                    <li>
                    <a href="/articles" className="footer-link">
                        Health Articles
                    </a>
                    </li>
                    <li>
                    <a href="/dashboard" className="footer-link">
                        My Dashboard
                    </a>
                    </li>
                    <li>
                    <a href="/profile" className="footer-link">
                        Health Profile
                    </a>
                    </li>
                    <li>
                    <a href="/?auth=login" className="footer-link">
                        Sign In
                    </a>
                    </li>
                    <li>
                    <a href="/?auth=register" className="footer-link">
                        Register
                    </a>
                    </li>
                </ul>
                    </div>
                    <div className="md:col-span-1">
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-4">
                    <li className="flex">
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
                        className="h-6 w-6 text-health-blue mr-2"
                    >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>123 Health Street, Medical City, MC 12345</span>
                    </li>
                    <li className="flex">
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
                        className="h-6 w-6 text-health-blue mr-2"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>+1 (555) 123-4567</span>
                    </li>
                    <li className="flex">
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
                        className="h-6 w-6 text-health-blue mr-2"
                    >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span>info@healthhub.com</span>
                    </li>
                </ul>
                    </div>
                </div>
                    
                    <div className="bottom-footer">
                    <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
                <p className="text-base text-gray-400 md:mb-0">
                    © 2025 HealthHub. All rights reserved.
                </p>
                <div className="flex space-x-6">
                    <Link className="text-gray-400 hover:text-white" to="/terms">
                    Terms of Service
                    </Link>
                    <Link className="text-gray-400 hover:text-white" to="/privacy">
                    Privacy Policy
                    </Link>
                    <Link className="text-gray-400 hover:text-white" to="/cookies">
                    Cookie Policy
                    </Link>
                </div>
                </div>
                    </div>
                </footer>
            </div>
    </div>
  );
}

export default Hero;
