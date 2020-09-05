import React from 'react';
import './App.scss';

import AppRoute from './hoc/AppRoute'
import EmptyLayout from './Layout/EmptyLayout/EmptyLayout';
import MainLayout from './Layout/MainLayout/MainLayout';

import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

import Home from './Pages/Home/Home';
import Category from './Pages/Category/Category';
import Details from './Pages/Details/Details';
import History from './Pages/History/History';
import NewItem from './Pages/NewItem/NewItem';
import Planning from './Pages/Planning/Planning';
import Profile from './Pages/Profile/Profile';

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Switch>
        <AppRoute Layout={MainLayout} path='/' exact component={Home} />
        <AppRoute Layout={MainLayout} path='/category' exact component={Category} />
        <AppRoute Layout={MainLayout} path='/details' exact component={Details} />
        <AppRoute Layout={MainLayout} path='/history' exact component={History} />
        <AppRoute Layout={MainLayout} path='/new-item' exact component={NewItem} />
        <AppRoute Layout={MainLayout} path='/planning' exact component={Planning} />
        <AppRoute Layout={MainLayout} path='/profile' exact component={Profile} />

        <AppRoute Layout={EmptyLayout} path='/login' exact component={Login} />
        <AppRoute Layout={EmptyLayout} path='/register' exact component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
