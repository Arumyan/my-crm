import React from 'react';
import './App.scss';

import AppRoute from './hoc/AppRoute'
import EmptyLayout from './Layout/EmptyLayout';
import MainLayout from './Layout/MainLayout';

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
