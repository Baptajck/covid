import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import GlobalFrance from '../GlobalFrance';

const App = () => {

  return (
    <div className="app">
      <Route>
        <GlobalFrance />
      </Route>
    </div>
  );
}

export default App;