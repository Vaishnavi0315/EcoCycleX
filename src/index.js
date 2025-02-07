import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css'; // Import global styling

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
