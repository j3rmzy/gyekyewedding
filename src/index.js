import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css';
import './index.scss';
import './assets/js/modernizr-custom';
import './assets/js/foreach.polyfill.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

require('dotenv').config();

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
