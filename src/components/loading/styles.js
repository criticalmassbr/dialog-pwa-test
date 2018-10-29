import styled from 'styled-components';

export const Bounce1 = styled.div``;

export const Bounce2 = styled.div``;

export const Bounce3 = styled.div``;

export const Wrapper = styled.div`
  grid-area: artist;
  margin-top: 36px;
  width: 100%;
  display: flex;
  justify-content: center;

  > div {
    width: 18px;
    height: 18px;
    background-color: #2EBD59;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  ${Bounce1} {
    -webkit-animation-delay: -0.32s !important;
    animation-delay: -0.32s !important;
  }

  ${Bounce2} {
    -webkit-animation-delay: -0.16s !important;
    animation-delay: -0.16s !important;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
`;
