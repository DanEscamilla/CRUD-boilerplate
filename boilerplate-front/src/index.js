import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/views/App.js';

import Providers from "./providers.js";


ReactDOM.render(
  <Providers>
    <App/>
  </Providers>
, document.getElementById('root'));
