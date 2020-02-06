import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// pages
import Artist from '../pages/Artist';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Artist} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
