import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HealthTopics from './components/HealthTopics';
import SearchConditions from './components/SearchConditions';
import HealthTools from './components/HealthTools';
import Community from './components/Community';
import Assistant from './components/Assistant';
import Hero from './components/Hero';
import Signin from './components/Signin';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/health-topics" element={<HealthTopics />} />
          <Route path="/search-conditions" element={<SearchConditions />} />
          <Route path="/health-tools" element={<HealthTools />} />
          <Route path="/community" element={<Community />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
