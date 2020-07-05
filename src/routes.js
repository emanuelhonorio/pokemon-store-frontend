import React from 'react'
import { Switch } from 'react-router-dom'

import PublicRoute from './components/public-route'
import PrivateRoute from './components/private-route'

import Store from './pages/store'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Profile from './pages/profile'

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute path="/" exact component={Store} />
      <PublicRoute restricted path="/login" component={SignIn} />
      <PublicRoute restricted path="/register" component={SignUp} />
      <PrivateRoute path="/profile" component={Profile} />
    </Switch>
  )
}