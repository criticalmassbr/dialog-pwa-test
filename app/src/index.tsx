import * as React from 'react'
import { ApolloProvider } from '@apollo/client'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom'
import UserPage from './components/UserPage'

import graphqlClient from './api/graphql'
import Root from './components/Root'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,400&display=swap')
  body {
    font-family: Robot, sans-serif
  }
`

render(
  <ApolloProvider client={graphqlClient}>
    <GlobalStyle />
    <Root />
  </ApolloProvider>,
  document.getElementById("app")
)

