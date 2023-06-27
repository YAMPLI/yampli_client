import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './assets/fonts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
);

reportWebVitals();
