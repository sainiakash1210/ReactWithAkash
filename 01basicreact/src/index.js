import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//react also create own DOM and capare with main doc and select main tag who required 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

