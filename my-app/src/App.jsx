import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HealthTopics from "./components/HealthTopics.jsx";
import SearchConditions from "./components/SearchConditions";
import HealthTools from "./components/HealthTools";
import Community from "./components/Community";
import Assistant from "./components/Assistant";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AuthModal from "./Pages/AuthModal";
import HealthDashboard from "./components/HealthDashboard";
import Profile from "./components/Profile";
import "./App.css";
import { DarkModeProvider, useDarkMode } from "./components/DarkModeContext";
import { OverlayProvider } from "./components/OverlayContext";
import { AuthProvider, useAuth } from "./components/AuthContext";
import SymptomChecker from "./components/Health-tools-components/SymptomChecker";
import HealthCalculators from "./components/Health-tools-components/HealthCalculators";
import NutritionGuide from "./components/Health-tools-components/NutritionGuide";
import EmergencyGuide from "./components/Health-tools-components/EmergencyGuide";
import MedicationTracker from "./components/MedicationTracker";
import PrivateRoute from "./components/PrivateRoute";
import ErrorBoundary from "./Pages/ErrorBoundary";
import "./components/Hero-components/MainHero.css";
import ArticlesList from "./components/ArticlesList";
import ArticleDetail from "./components/ArticleDetail.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [initialTab, setInitialTab] = useState("login");
  const { darkMode: isDarkMode } = useDarkMode();
  const { isAuthenticated } = useAuth();

  const handleOpenAuth = (tab = "login") => {
    setInitialTab(tab);
    setShowAuthModal(true);
  };

  const handleCloseAuth = () => {
    setShowAuthModal(false);
  };

  return (
    <>
      <ScrollToTop />
      <div className="app-layout">
        <Header onOpenAuth={handleOpenAuth} />
        <div className={`content ${isDarkMode ? "dark" : ""}`}>
          <Routes>
            <Route path="/" element={<Hero onOpenAuth={handleOpenAuth} />} />
            <Route path="/health-topics" element={<HealthTopics />} />
            <Route path="/health-search" element={<SearchConditions />} />
            <Route path="/health-tools" element={<HealthTools />} />
            <Route path="/community-forum" element={<Community />} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/symptom-checker" element={<SymptomChecker />} />
            <Route path="/health-calculators" element={<HealthCalculators />} />
            <Route path="/nutrition-guide" element={<NutritionGuide />} />
            <Route path="/emergency-guide" element={<EmergencyGuide />} />
            <Route path="/articles-list" element={<ArticlesList />} />
            <Route path="/articles-list/:articleId" element={<ArticleDetail />} />
            <Route
              path="/health-dashboard"
              element={
                <PrivateRoute onRequireAuth={handleOpenAuth}>
                  <HealthDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute onRequireAuth={handleOpenAuth}>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/medication-tracker"
              element={
                <PrivateRoute onRequireAuth={handleOpenAuth}>
                  <MedicationTracker />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>

      {showAuthModal && !isAuthenticated && (
        <div className="signin-overlay">
          <AuthModal
            isOpen={showAuthModal}
            onClose={handleCloseAuth}
            onSuccess={handleCloseAuth}
            initialTab={initialTab}
            onOpenAuth={handleOpenAuth}
          />
        </div>
      )}
    </>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <DarkModeProvider>
          <OverlayProvider>
            <Router>
              <AppContent />
            </Router>
          </OverlayProvider>
        </DarkModeProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
