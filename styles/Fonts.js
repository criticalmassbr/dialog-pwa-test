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

  @font-face {
    font-family: 'robotolight';
    src: url('/fonts/roboto-light-webfont.woff2') format('woff2'),
         url('/fonts/roboto-light-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'robotomedium';
    src: url('/fonts/roboto-medium-webfont.woff2') format('woff2'),
        url('/fonts/roboto-medium-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'robotoregular';
    src: url('/fonts/roboto-regular-webfont.woff2') format('woff2'),
        url('/fonts/roboto-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'robotothin';
    src: url('/fonts/roboto-thin-webfont.woff2') format('woff2'),
        url('/fonts/roboto-thin-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;