import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const Artist = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100px;
  border-radius: 4px;
  margin-right: 15px;
  object-fit: cover;
  object-position: center;
`;

export const Name = styled.h2`
  color: #333;
  font-size: 20px;
  margin-left: 15px;
`;
