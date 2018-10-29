import React from 'react';
import { Route } from "react-router-dom";

const MobxRoute = ({ component: Component, store, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} store={store} />} />
);

export default MobxRoute;
