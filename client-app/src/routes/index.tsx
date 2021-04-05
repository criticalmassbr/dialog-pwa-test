import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home/Home';
import UserDetails from 'pages/UserDetails/UserDetails';

const Routes: React.FC = () => (
  <Switch>
    {/* <Route path="/" exact component={Home} /> */}
    <Route path="/" exact component={Home} />
    <Route path="/user-details/:name/:id" component={UserDetails} />
  </Switch>
);
export default Routes;
