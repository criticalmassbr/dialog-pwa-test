import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  grid-gap: 10px;
  justify-items: center;
  padding: 32px;
`;

export const Album = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  padding: 8px;
  background-color: #333;
`;

export const Image = styled.img`
  height: 200px;
  margin-bottom: 8px;
`;

export const Name = styled.div`
  text-align: center;
  color: white;
`;
