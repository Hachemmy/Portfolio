import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Application from './Application';
import reportWebVitals from './reportWebVitals';

const racine = ReactDOM.createRoot(document.getElementById('root'));
racine.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
