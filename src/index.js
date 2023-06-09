import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './assets/fonts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './scss/App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
