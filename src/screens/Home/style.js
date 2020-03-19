import styled, { css } from 'styled-components';

export const gridTemplate = css`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
`;

export const Container = styled.main`
  ${gridTemplate}
  padding: 6rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

export const Message = styled.p`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 500;
  grid-area: 2 / 1 / 2 / -1;
`;
