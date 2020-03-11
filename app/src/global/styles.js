import { createGlobalStyle } from 'styled-components'
import { resetCss } from '../utils/reset.css'

const GlobalStyle = createGlobalStyle`
  ${resetCss}

  :root {
    --main-color: #2874E7;
    --sub-color: #E129AE;
    --dark-color: #202020;
  }

  ::selection {
    background: var(--dark-color);
    color: #fff;
  }

  * {
    outline: 0;
  }

  body, input, textarea, button {
    font-family: 'Helvetica Neue', sans-serif;
  }

  body {
    background-color: var(--dark-color);
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  em {
    font-style: italic;
  }

  main {
    max-width: 700px;
    margin: 0 auto;
  }
`

export default GlobalStyle
