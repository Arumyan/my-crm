import React from 'react';
import './App.scss';

import AppRoute from './layout/AppRoute'
import EmptyLayout from './layout/empty-layout';
import MainLayout from './layout/main-layout';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Switch>
        <AppRoute Layout={MainLayout} path='/' exact component={Home} />
        <AppRoute Layout={EmptyLayout} path='/login' exact component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
