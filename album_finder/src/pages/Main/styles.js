import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;

  grid-template-columns: 1fr;
  grid-template-rows: 50vh 1fr 50px;

  justify-items: center;
  align-items: center;
`;

export const ArtistLabel = styled.div`
  margin: 0 20px;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;

  justify-items: center;
  align-items: center;
`;

export const ArtistImage = styled.div`
  width: 190px;
  height: 190px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 4px 8px rgba(0, 0, 0, 0.05);

  background-image: url('${props => props.url}');
  background-position: center;
  background-size: cover;
`;

export const ArtistName = styled.h3`
  font-size: 48px;
  color: #597480;
`;

export const AlbumList = styled.div`
  height: 100%;
  max-width: 900px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Message = styled.div`
  color: #597480;
  font-size: 48px;
`;
