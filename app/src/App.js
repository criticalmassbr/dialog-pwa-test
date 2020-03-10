import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './lib/apolloClient'

// Components
import Home from './components/Home'

// Global style
import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Home />
    </ApolloProvider>
  )
}

export default App
