import styled from 'styled-components';

export const Container = styled.ul`
  width: 80%;
  margin: 50px auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
`;
