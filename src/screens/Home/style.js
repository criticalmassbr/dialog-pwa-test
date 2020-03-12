import styled, { css } from 'styled-components';

export const gridTemplate = css`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
`;

export const Container = styled.main`
  ${gridTemplate}
  padding: 6rem;
`;

export const Form = styled.form`
  grid-area: 1 / 1 / 1 / span 3;
  margin-bottom: 4rem;
  width: 100%;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2.5rem;
  color: #121212;
  height: 5rem;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  width: 100%;

  ::placeholder {
    color: #999;
    font-style: italic;
  }
`;
