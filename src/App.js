import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Contact, Home, NotFound, Portfolio, Skills } from './pages';

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path='/'>
          <Home db='' />
        </Route>
        <Route exact path='/skills'>
          <Skills db='' />
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio db='' />
        </Route>
        <Route exact path='/contact'>
          <Contact db='' />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
