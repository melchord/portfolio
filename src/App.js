import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';

import { Home } from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
