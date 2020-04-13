import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    width: 100%;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
    color: #546e7a;
  }

  .main{
    width: 1140px;
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
