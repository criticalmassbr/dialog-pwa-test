import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #011528;
  min-height: 100vh;
`;

export const ContainerSearch = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  justify-content: center;
  align-items: center;
`;
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-items: center;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 32px;
`;

export const TitleContainerCard = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 16px;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoadingText = styled.div`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

export const ContainerButton = styled.div`
  width: 127px;
  height: 52px;
  color: #016fb9;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border: 2px solid #016fb9;
  }
`;
