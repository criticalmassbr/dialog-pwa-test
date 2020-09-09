import React, { FunctionComponent } from 'react';
import { ApolloProvider } from '@apollo/client';
import ContentContainer from "./components/ContentContainer/ContentContainer";
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from "history";

const App: FunctionComponent<{ loading?: boolean, client: any }> = ({ loading, client }) => {
  if (loading) {
    return (
      <div style={{width:"100%", height:"100%"}}>
        Loading...
      </div>
    )
  }

  const hist = createBrowserHistory();
  //example with Router matching view/component to a route and managing history.
  //For the scale of the demo it is not need however.
  return (
    <ApolloProvider client={client}>
     <Router history={hist}>
      <Switch>          
        <Route path="/" component={ContentContainer} />
      </Switch>
    </Router>
    </ApolloProvider>
  )
}

export default App;