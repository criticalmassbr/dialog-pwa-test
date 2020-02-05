import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import Artist from '../pages/Artist';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Artist} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
