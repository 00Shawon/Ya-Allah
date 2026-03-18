import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Conditions from './pages/Conditions.jsx';
import Results from './pages/Results.jsx';
import NameDetail from './pages/NameDetail.jsx';
import AllNames from './pages/AllNames.jsx';
import './styles.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/seek" element={<Conditions />} />
        <Route path="/names/:conditionId" element={<Results />} />
        <Route path="/name/:number" element={<NameDetail />} />
        <Route path="/all" element={<AllNames />} />
      </Routes>
    </Router>
  );
}
