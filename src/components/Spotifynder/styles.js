import styled from 'styled-components';

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