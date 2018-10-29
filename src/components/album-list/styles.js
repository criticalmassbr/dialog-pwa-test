import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));
  justify-items: center;
  padding: 32px;
`;

export const Album = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 208px;
  padding: 8px;
  background-color: #212121;
`;

export const Cover = styled.img`
  height: 208px;
  margin-bottom: 8px;
`;

export const Title = styled.div`
  text-align: center;
  color: white;
`;
