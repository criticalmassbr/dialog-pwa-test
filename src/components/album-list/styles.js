import styled from 'styled-components';

export const AlbumListWrapper = styled.div`
  grid-area: list;
  justify-self: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Album = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 208px;
  padding: 8px;
  margin: 8px;
  background-color: #212121;
`;

export const AlbumCover = styled.img`
  height: 208px;
  margin-bottom: 8px;
`;

export const AlbumTitle = styled.div`
  text-align: center;
  color: white;
`;
