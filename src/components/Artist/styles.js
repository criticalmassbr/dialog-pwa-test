import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ArtistImage = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid #CFCACA;
  border-radius: 50%;
  flex-shrink: 0px;
  transition: all .4s;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

export const ArtistName = styled.h2`
  font-size: 34px;
  margin: 0px 24px;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
    margin: 28px 0px 0px;
  }
`;