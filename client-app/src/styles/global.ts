import { createGlobalStyle } from 'styled-components';
import colors from 'utils/colors';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}


#root {
  max-width: 90rem;
  margin:0 auto;
  padding:0.5rem 0.15rem;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html,
body {
  background: linear-gradient(-90deg, ${colors.primaryShade}, ${colors.primary});
}

body {
  -webkit-font-smoothing: antialiased !important;
}
@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}
@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}



body,
input,
textarea,
button {
  color: ${colors.black};
  font-size: 1rem; //16px;
  font-family: Roboto, Arial, Helvetica, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
button {
  cursor: pointer;
}
`;
