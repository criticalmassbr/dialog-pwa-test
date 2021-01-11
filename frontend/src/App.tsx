import React, { FunctionComponent } from 'react';
import { ApolloProvider } from '@apollo/client';
import Content from "./components/Content";
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from "history";

const App: FunctionComponent<{ loading?: boolean, client: any }> = ({ loading, client }) => {
  if (loading) {
    return (
      <div>
        Carregando...
      </div>
    )
  }

  const history = createBrowserHistory();
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Content} />
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App;