import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  grid-gap: 20px;
  width: 100%;
  margin-top: 50px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;