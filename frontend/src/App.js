import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HelloProjectPage from './pages/helloProjectPaje';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HelloProjectPage />} />
      </Routes>
    </Router>
  );
};

export default App;
