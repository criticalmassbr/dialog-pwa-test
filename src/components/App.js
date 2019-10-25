import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Album from './Album';

export default class App extends React.Component {
  render() {
      return (
          <BrowserRouter>
            <Switch>
                <Route path="/" component={Album} />
            </Switch>
          </BrowserRouter>
      );
  }
}