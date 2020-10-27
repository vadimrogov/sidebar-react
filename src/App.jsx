import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';

import { ROUTES } from './constants';

const App = () => (
  <Router>
    <Switch>
      {ROUTES.map((route, idx) => (
        <Route key={idx} exact={route.exact} path={route.path}>
          <SideBar {...route} />
        </Route>
      ))}
    </Switch>
  </Router>
);

export default App;
