import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CV from './components/CV';
import Competence from './components/Competence';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/competence/:id" element={<Competence />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
