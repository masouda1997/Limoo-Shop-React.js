import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/public.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import {store} from './store/index'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* we dont need ApiProvider. should be handled by middleware in store file */}
      <App />
  </Provider>
  // </React.StrictMode>
);

