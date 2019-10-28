import styled from 'styled-components';

export const Container = styled.div`
  color: #333;
  display: grid;
  text-align: center;
  grid-template-areas:
    'header header header header header'
    '. input input input .'
    'artist artist artist artist artist';
`;

export const MainName = styled.h1`
  grid-area: header;
`;

export const InputSearch = styled.input`
  grid-area: input;
  color: #333;
  line-height: 18px;
  padding: 5px 10px;
  height: 36px;

  border-radius: 5px;
  border: 1px solid #33333380;
`;

export const ArtistContainer = styled.div`
  grid-area: artist;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px;

  justify-self: center;
  align-self: center;

  img {
    width: 96px;
    height: 96px;
  }

  span {
    align-self: center;
    color: #222;
    font-size: 20px;
  }
`;
