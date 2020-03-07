import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import '${require('../../../node_modules/font-awesome/css/font-awesome.min.css')}';

  @font-face {
    font-family: 'MaaxRounded';
    src: url(${require('../../assets/fonts/MaaxRounded.eot')});
    src: url(${require('../../assets/fonts/MaaxRounded.ttf')}) format('truetype'),
        url(${require('../../assets/fonts/MaaxRounded.woff2')}) format('woff2'),
        url(${require('../../assets/fonts/MaaxRounded.woff')}) format('woff'),
        url(${require('../../assets/fonts/MaaxRounded.eot?#iefix')}) format('embedded-opentype');
  }

  * {
    font-family: 'MaaxRounded', 'BlinkMacSystemFont', 'Segoe UI',
    'Roboto', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }

  body {
    margin: 0px;
  }

  #root {
    padding: .1px;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  
  @media (max-width: 576px) {
    margin: 16px;
  }
  
  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 810px) {
    max-width: 810px;
  }

  @media (min-width: 1060px) {
    max-width: 1060px;
  }
`;

export const MarginWrapper = styled.div`
  margin-top: 80px;
`;

export const Label = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  color: rgba(0, 0, 0, .5);
`;