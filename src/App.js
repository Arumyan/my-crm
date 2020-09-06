import React, {useEffect} from 'react';
import './App.scss';

import { routes } from './routes/routes';
import AppRoute from './hoc/AppRoute';
import { BrowserRouter as Router, Switch } from 'react-router-dom';


import {infoAPI} from './api/infoAPI'
import { setInfoAction } from './redux/reducers/infoReducer';
import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('init app')
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        infoAPI.fetchInfo().then((data) => {
          dispatch(setInfoAction(data))
        }).catch((e) => {
          console.log(e)
        })
      } else {
        console.log('Пользователь не авторизован')
      }
    });
  })

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
