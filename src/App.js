import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CV from './components/CV';
import Competence from './components/Competence';
import Background from './components/Background';
import './App.css';

function App() {
  return (
    <div>
      <Background />
      <Router basename="/theo_court_portfolio.github.io">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/competence/:id" element={<Competence />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
