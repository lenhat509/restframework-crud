import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Auth from './components/Auth'

ReactDOM.render(
  <Auth>
    <App />
  </Auth>,
  document.getElementById('root')
);

