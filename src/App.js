import React, { useState, useEffect } from 'react';
import './App.scss';

import { routes } from './routes/routes';
import AppRoute from './hoc/AppRoute';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { infoAPI } from './api/infoAPI';
import { setInfoAction } from './redux/reducers/infoReducer';
import { setAuthActionCreator } from './redux/reducers/authReducer';
import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import Loader from './components/Loader/Loader'

const App = () => {
  const [isInitialize, setInitialize] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        infoAPI
          .fetchInfo()
          .then((data) => {
            dispatch(setInfoAction(data));
            dispatch(setAuthActionCreator({ isAuth: true }));
            setInitialize(true)
          })
          .catch((e) => {
            setInitialize(true)
            setError(e.message)
          });
      } else {
        setInitialize(true)
        dispatch(setAuthActionCreator({ isAuth: false }));
      }
    });
  });

  if(!isInitialize) {
    return <Loader/>
  }

  if(error) {
    return <div>Произошла ошибка: {error}</div>
  }

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
              authRequire={route.authRequire}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
