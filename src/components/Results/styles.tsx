import styled from "styled-components";

export const Albums = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 25% [album]);
  grid-gap: 2em 2em;
  justify-content: center;
  padding: 1em 10% 0;

  @media (max-width: 767px) {
    grid-template-columns: 100%;
    padding: 0 25%;
  }
`;
