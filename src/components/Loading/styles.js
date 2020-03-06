import styled, { keyframes } from 'styled-components';

const arcordion = keyframes`
  0% {
    height: 0px;
  }

  50% {
    height: 50px;
  }

  100% {
    height: 0px;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const Bar = styled.div`
  width: 10px;
  height: 0px;
  background-color: #1ED760;
  animation: ${arcordion} .7s infinite linear;
  
  &:not(:last-child) {
    margin-right: 6px;
  }

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: .2s;
  }

  &:nth-child(3) {
    animation-delay: .4s;
  }
`;