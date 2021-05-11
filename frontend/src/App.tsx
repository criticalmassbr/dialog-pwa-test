import React, {useState} from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import GlobalStyle from './styles/global';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListUser from './page/ListUser'
import UserDetail from './page/UserDetail'
import Header from './page/Header'
const client = new ApolloClient({
  uri: 'http://127.0.0.1:4000/graphql',
  cache: new InMemoryCache()
});

const App: React.FC = () => {
  const [search, setSearch] = useState('');
  return (
    <BrowserRouter>
    <ApolloProvider client={client}>
      <div>
      <Header search={search} setSearch={setSearch} />
      <Switch>
        <Route path="/" exact children={<ListUser search={search} setSearch={setSearch} />}/>
        <Route path="/user/:id" children={<UserDetail search={search} setSearch={setSearch} />}/>
      </Switch>
      </div>
      
    </ApolloProvider>
    <GlobalStyle />
    </BrowserRouter>
  );
};
export default App;
