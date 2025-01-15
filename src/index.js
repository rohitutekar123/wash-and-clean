import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';  // Add .js extension to App import
//import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter

import reportWebVitals from './reportWebVitals.js';  // Add .js extension to reportWebVitals import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> {/* Wrap App in BrowserRouter */}
    <App />
  </>
);

reportWebVitals();
