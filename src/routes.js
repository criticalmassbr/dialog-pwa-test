import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '~/pages/Main';
import PageNotFound from '~/pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />

      <Route component={PageNotFound} />
    </Switch>
  );
}
