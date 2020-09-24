import React, { useEffect } from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { routes } from './routes/routes';
import { authThunk } from './redux/reducers/authReducer';
import AppRoute from './hoc/AppRoute';
import Loader from './components/Loader/Loader';

const App = () => {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector(
    (state) => state.authReducer
  );

  useEffect(() => {
    dispatch(authThunk())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(isLoading) {
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
