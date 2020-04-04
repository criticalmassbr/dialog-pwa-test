import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'labiicons';
    src:  url('/fonts/labiicons.ttf');
    src:  url('/fonts/labiicons.eot?#iefix') format('embedded-opentype'),
      url('/fonts/labiicons.ttf') format('truetype'),
      url('/fonts/labiicons.woff') format('woff'),
      url('/fonts/labiicons.svg?#labiicons') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
`;