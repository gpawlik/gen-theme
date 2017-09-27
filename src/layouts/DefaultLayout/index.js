import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/Header';

export default ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <div>
        <Header />
        <Component {...matchProps} />
      </div>
    )} />
  );
};
