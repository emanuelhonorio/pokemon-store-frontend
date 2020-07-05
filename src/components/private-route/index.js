import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authService from '../../services/auth';

const PrivateRoute = ({component: Component, ...rest}) => {

  const logged = authService.isLogged()

  return (

    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (
      logged ?
        <Component {...props} />
      : <Redirect to="/login" />
    )} />
  );
};

export default PrivateRoute;