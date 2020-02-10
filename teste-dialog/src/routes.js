import React from "react";
import { Switch, Route } from "react-router-dom";

import Artist from "./pages/Artist";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Artist} />
    </Switch>
  );
}
