import React from 'react';

import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
   to {transform: rotate(360deg);}
`;

const Container = styled.div`
  position: relative;
  min-height: 36px;
`;

const Spinner = styled.div`
  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #7159c1;
    animation: ${rotate} 0.6s linear infinite;
  }
`;

export default () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};
