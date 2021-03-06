import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Firebase } from './components';
import { Contact, Home, NotFound, Portfolio, Skills } from './pages';

export default function App() {
  const db = Firebase.firestore();

  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path='/'>
          <Home db={db} />
        </Route>
        <Route exact path='/skills'>
          <Skills db={db} />
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio db={db} />
        </Route>
        <Route exact path='/contact'>
          <Contact db={db} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
