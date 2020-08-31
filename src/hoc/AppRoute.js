import React from 'react';

import { Route } from 'react-router-dom';

const AppRoute = ({ Layout, ...rest }) => {
  return (
    <Layout>
      <Route {...rest}></Route>
    </Layout>
  );
};

export default AppRoute;
