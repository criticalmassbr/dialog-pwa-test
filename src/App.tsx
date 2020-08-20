import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux'

import reducers from './reducers'

import PaginaUsuario from './paginas/PaginaUsuario';
import PaginaHome from './paginas/PaginaHome';
import PaginaResultadosBusca from './paginas/PaginaResultadosBusca';

import AppHeader from './componentes/AppHeader';

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from 'apollo-cache-persist'
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

let store = reducers.createStore();
let history = reducers.getHistory();

function App() {

    const [client, setClient] = useState(undefined);

    useEffect(() => {
        const cache = new InMemoryCache();
        const link = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URI });

        const _client = new ApolloClient({
            link, cache, defaultOptions: {
                watchQuery: {
                    fetchPolicy: 'cache-first',
                },
            }
        });

        persistCache({ cache, storage: window.localStorage }).then(() => {
            setClient(_client);
        });

    }, []);

    if (client === undefined) return <div>Restaurando cache...</div>;

    return (
        <Provider store={store}>
            <ApolloProvider client={client}>
                <ConnectedRouter history={history} >
                    <div>
                        <AppHeader />
                    </div>
                    <Switch>
                        <Route path="/usuario/:id" component={PaginaUsuario} />
                        <Route path="/busca/:termo" component={PaginaResultadosBusca} />
                        <Route path="/" component={PaginaHome} />
                    </Switch>
                </ConnectedRouter>
            </ApolloProvider>
        </Provider>
    );
}
export default App;