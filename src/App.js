import React, {useEffect} from 'react';
import './App.scss';

import { routes } from './routes/routes';
import AppRoute from './hoc/AppRoute';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import {infoAPI} from './api/infoAPI'
import { setInfoAction } from './redux/reducers/infoReducer';
import firebase from 'firebase/app';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth)

  useEffect(() => {

    firebase.auth().onAuthStateChanged((user) => {
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
      {/* {!isAuth && (<Redirect to='/login'/>)} */}

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
