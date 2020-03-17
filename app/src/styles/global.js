import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    background-color: ${props => props.theme.colors.background}
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
    color: ${props => props.theme.colors.textRegular}
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button: {
    cursor: pointer;
  }
`;
