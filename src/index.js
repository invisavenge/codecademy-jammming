import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './components/App/App';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
