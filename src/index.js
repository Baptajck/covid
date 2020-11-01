import React from 'react';
import { render } from 'react-dom';
import './styles/reset.scss';
import './styles/index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// == Render
const rootComponent = (
  <Router>
    <App />
  </Router>
);

// Le rendu de React => DOM
render(rootComponent, document.getElementById('root'));

reportWebVitals();
// serviceWorker.unregister();

