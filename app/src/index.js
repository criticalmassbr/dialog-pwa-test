import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './lib/apolloClient'

// Components
import Home from './components/Home'
import GlobalStyle from './global/styles'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Home />
  </ApolloProvider>,
  document.getElementById('root')
)

serviceWorker.register()
