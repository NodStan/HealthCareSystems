import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HealthTopics from './components/HealthTopics';
import SearchConditions from './components/SearchConditions';
import HealthTools from './components/HealthTools';
import Community from './components/Community';
import Assistant from './components/Assistant';
import Hero from './components/Hero';

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/health-topics" element={<HealthTopics />} />
          <Route path="/search-conditions" element={<SearchConditions />} />
          <Route path="/health-tools" element={<HealthTools />} />
          <Route path="/community" element={<Community />} />
          <Route path="/assistant" element={<Assistant />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
