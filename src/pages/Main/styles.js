import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  color: #333;

  margin: 20px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainName = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const InputSearch = styled.input`
  color: #333;
  line-height: 18px;
  padding: 5px 10px;
  height: 36px;
  margin-bottom: 10px;
  max-width: 360px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #33333380;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

export const ArtistContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  img {
    width: 96px;
    height: 96px;
  }

  span {
    padding-left: 10px;
    align-self: center;
    color: #222;
    font-size: 30px;
  }
`;

export const List = styled.div`
  grid-area: list;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;

  justify-self: center;
  align-self: center;
`;
