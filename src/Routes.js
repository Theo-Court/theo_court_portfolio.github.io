import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import CV from './components/CV';
import Competence from './components/Competence';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/competence/:id" element={<Competence />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
