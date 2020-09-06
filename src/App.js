import React from 'react';
import './App.scss';

import { routes } from './routes/routes';
import AppRoute from './hoc/AppRoute';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          return (
            <AppRoute
              key={route.path}
              path={route.path}
              exact={route.exact}
              layout={route.layout}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
