import { Card } from '../../components/card/card';
import { Header } from '../../components/header/header';
import { user } from '../../mock/userMock';
import { ContainerCard, ContainerSearch, MainContainer } from './mainPageStyle';

export const MainPage = () => {
  return (
    <>
      <MainContainer>
        <ContainerSearch>
          <Header />
        </ContainerSearch>
        <ContainerCard>
          {user.map((user) => {
            return <Card key={user._id} user={user} />;
          })}
        </ContainerCard>
      </MainContainer>
    </>
  );
};
