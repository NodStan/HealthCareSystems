// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HealthTopics from "./components/HealthTopics";
import SearchConditions from "./components/SearchConditions";
import HealthTools from "./components/HealthTools";
import Community from "./components/Community";
import Assistant from "./components/Assistant";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Signin from "./Pages/AuthModal";
import Login from "./Pages/LoginForm";
import HealthDashboard from "./components/HealthDashboard";
import Profile from "./components/Profile";
import "./App.css";
import { DarkModeProvider } from "./components/DarkModeContext";
import { OverlayProvider } from "./components/OverlayContext";
import { AuthProvider } from "./components/AuthContext"; // AuthContext imported here
import SymptomChecker from "./components/Health-tools-components/SymptomChecker";
import HealthCalculators from "./components/Health-tools-components/HealthCalculators";
import NutritionGuide from "./components/Health-tools-components/NutritionGuide";
import EmergencyGuide from "./components/Health-tools-components/EmergencyGuide";
import ExerciseLibrary from "./components/Health-tools-components/ExerciseLibrary";
import "./components/Hero-components/MainHero.css";

const App = () => {
  return (
    <AuthProvider> {/* Wrapping the entire app to provide authentication context */}
      <DarkModeProvider>
        <OverlayProvider>
          <Router>
            <div className="app-layout">
              <Header /> {/* The Header will change based on authentication state */}
              <div className="content">
                <Routes>
                  <Route path="/" element={<Hero />} />
                  <Route path="/health-topics" element={<HealthTopics />} />
                  <Route path="/health-search" element={<SearchConditions />} />
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
                  <Route path="/health-dashboard" element={<HealthDashboard />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </Router>
        </OverlayProvider>
      </DarkModeProvider>
    </AuthProvider>
  );
};

export default App;
