import styled from 'styled-components';

export const Container = styled.main`
  align-items: center;
  display: grid;
  min-height: 100vh;
  padding: 2rem;
`;

export const Form = styled.form`
  max-width: 78rem;
`;

export const Title = styled.h1`
  color: #121212;
  font-size: 5rem;
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
