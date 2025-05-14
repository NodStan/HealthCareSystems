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
import { AuthProvider } from "./components/AuthContext";
import SymptomChecker from "./components/Health-tools-components/SymptomChecker";
import HealthCalculators from "./components/Health-tools-components/HealthCalculators";
import NutritionGuide from "./components/Health-tools-components/NutritionGuide";
import EmergencyGuide from "./components/Health-tools-components/EmergencyGuide";
import ExerciseLibrary from "./components/Health-tools-components/ExerciseLibrary";
import MedicationTracker from "./components/MedicationTracker";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute

import "./components/Hero-components/MainHero.css";

// ScrollToTop component to scroll to top on route change
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <AuthProvider>
      <DarkModeProvider>
        <OverlayProvider>
          <Router>
            <ScrollToTop />
            <div className="app-layout">
              <Header />
              <div className="content">
                <Routes>
                  <Route path="/" element={<Hero />} />
                  <Route path="/health-topics" element={<HealthTopics />} />
                  <Route path="/health-search" element={<SearchConditions />} />
                  <Route path="/health-tools" element={<HealthTools />} />
                  <Route path="/community-forum" element={<Community />} />
                  <Route path="/assistant" element={<Assistant />} />
                  <Route path="/signin" element={<Signin />} />
                  {/* Use PrivateRoute for protected routes */}
                  <Route path="/symptom-checker" element={<PrivateRoute element={<SymptomChecker />} />} />
                  <Route path="/health-calculators" element={<PrivateRoute element={<HealthCalculators />} />} />
                  <Route path="/nutrition-guide" element={<PrivateRoute element={<NutritionGuide />} />} />
                  <Route path="/exercise-library" element={<PrivateRoute element={<ExerciseLibrary />} />} />
                  <Route path="/emergency-guide" element={<PrivateRoute element={<EmergencyGuide />} />} />
                  <Route path="/login" element={<Login />} />
                  {/* Other protected routes */}
                  <Route path="/health-dashboard" element={<PrivateRoute element={<HealthDashboard />} />} />
                  <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
                  <Route path="/medication-tracker" element={<PrivateRoute element={<MedicationTracker />} />} />
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
