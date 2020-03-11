import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  transition: transform 300ms ease, box-shadow 300ms ease-out;

  :hover {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
`;

export const Name = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  font-size: 1.3rem;
  font-style: italic;
  margin-top: 1.5rem;
  text-align: center;
`;
