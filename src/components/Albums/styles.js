import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  grid-gap: 20px;
  width: 100%;
  margin-top: 50px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(1, 100%);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 50%);
  }

  @media (min-width: 810px) {
    grid-template-columns: repeat(3, 33%);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 250px);
  }
`;