import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100%;
}

body {

  background-color: white;
  -webkit-font-smoothing: antialiased;
}

body,
input,
button {
  font-family: "Raleway", sans-serif;
  color: white;
}
`;
