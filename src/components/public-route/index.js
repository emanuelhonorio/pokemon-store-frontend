import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authService from '../../services/auth';

const PublicRoute = ({component: Component, restricted, ...rest}) => {

    const logged = authService.isLogged()
    
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            logged && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;