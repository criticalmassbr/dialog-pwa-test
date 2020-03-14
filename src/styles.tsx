import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    background-color: black;
    color: mediumseagreen;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
`;

export const Header = styled.header`
  text-align: center;
  padding: 1em 0;
`;

export const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  padding: 1em 0;
`;

export const SearchSection = styled.nav`
  align-self: center;
  width: 100%;
`;
