import { Header } from '../../components/header/header';
import { ContainerCard, ContainerSearch, MainContainer } from './mainPageStyle';

export const MainPage = () => {
  return (
    <>
      <MainContainer>
        <ContainerSearch>
          <Header />
        </ContainerSearch>
        <ContainerCard></ContainerCard>
      </MainContainer>
    </>
  );
};
