import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
=======

import { BrowserRouter } from 'react-router-dom'

>>>>>>> e7074ae7f2a93ce15f4b36d35cad4a70e2d836de

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

>>>>>>> e7074ae7f2a93ce15f4b36d35cad4a70e2d836de
