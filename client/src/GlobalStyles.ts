import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: black;
  }

  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: white;
  }
`;

export default GlobalStyles;
