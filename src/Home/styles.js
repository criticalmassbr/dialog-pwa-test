import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 20px;
  @media (max-width: 800px) {
    width: 100%;
  }

  svg {
    position: absolute;
    left: 10px;
  }

  input {
    height: 50px;
    width: 500px;
    padding: 10px;
    padding-left: 40px;
    font-size: 16px;
    border: 1px solid #b6cad4;
    border-radius: 4px;

    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;

export const Artist = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    width: 150px;
  }
`;

export const AlbumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
