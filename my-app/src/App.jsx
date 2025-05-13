import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HealthTopics from './components/HealthTopics';
import SearchConditions from './components/SearchConditions';
import HealthTools from './components/HealthTools';
import Community from './components/Community';
import Assistant from './components/Assistant';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Signin from './Pages/AuthModal';
import Login from './Pages/LoginForm';
import './App.css';
import { DarkModeProvider } from './components/DarkModeContext';
import { OverlayProvider } from './components/OverlayContext'; // Import OverlayProvider
import SymptomChecker from './components/Health-tools-components/SymptomChecker';
import HealthCalculators from './components/Health-tools-components/HealthCalculators';
import NutritionGuide from './components/Health-tools-components/NutritionGuide';
import EmergencyGuide from './components/Health-tools-components/EmergencyGuide';
import ExerciseLibrary from './components/Health-tools-components/ExerciseLibrary';
import './components/Hero-components/MainHero.css';

const App = () => {
  return (
    <DarkModeProvider>
      <OverlayProvider> {/* Wrap the app with OverlayProvider */}
        <Router>
          <div className="app-layout">
            <Header />
            <div className="content">
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/health-topics" element={<HealthTopics />} />
                <Route path="/search-conditions" element={<SearchConditions />} />
                <Route path="/health-tools" element={<HealthTools />} />
                <Route path="/community-forum" element={<Community />} />
                <Route path="/assistant" element={<Assistant />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/symptom-checker" element={<SymptomChecker />} />
                <Route path="/health-calculators" element={<HealthCalculators />} />
                <Route path="/nutrition-guide" element={<NutritionGuide />} />
                <Route path="/exercise-library" element={<ExerciseLibrary />} />
                <Route path="/emergency-guide" element={<EmergencyGuide />} />
                <Route path="/login" element={<Login />} />
                <Route path='*' element={<p>Not found</p>}/>
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </OverlayProvider>
    </DarkModeProvider>
  );
};

export default App;
