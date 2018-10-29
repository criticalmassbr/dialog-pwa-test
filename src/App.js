import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import MobxRoute from '~/src/routes/mobx';
import Home from '~/src/pages/home';

const App = ({ store }) => (
  <Router>
    <MobxRoute path="/" exact component={Home} store={store} />
  </Router>
);

export default App;
