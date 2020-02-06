import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #f5f5f5;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  `;

export default GlobalStyles;
