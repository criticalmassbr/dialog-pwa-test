import * as React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import Root from './components/Root'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,400&display=swap')
  body {
    font-family: Robot, sans-serif
  }
`

render(<>
  <GlobalStyle />
  <Root />
  </>, document.getElementById("app"))

