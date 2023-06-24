import { Card } from '../../components/card/card';
import { Header } from '../../components/header/header';
import { ContainerCard, ContainerSearch, MainContainer } from './mainPageStyle';

export const MainPage = () => {
  return (
    <>
      <MainContainer>
        <ContainerSearch>
          <Header />
        </ContainerSearch>
        <ContainerCard>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ContainerCard>
      </MainContainer>
    </>
  );
};
