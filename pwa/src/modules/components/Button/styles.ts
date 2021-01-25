import styled from 'styled-components';

export const Container = styled.button`
  padding: 1rem 1.2rem;
  border: none;
  background: ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.lightBackground};
  font-weight: 700;
  width: auto;
  text-align: center;
`;
