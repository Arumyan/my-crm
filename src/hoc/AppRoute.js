import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';

const AppRoute = ({ layout: Layout, authRequire, ...rest }) => {
  const isAuth = useSelector((state) => state.authReducer)
  const history = useHistory();

  if(authRequire && !isAuth) {
    history.push('/login')
  }

  return (
    <Layout>
      <Route {...rest}></Route>
    </Layout>
  );
};

export default AppRoute;
