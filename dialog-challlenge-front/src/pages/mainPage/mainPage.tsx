import { useContext, useEffect, useState } from 'react';
import { Card } from '../../components/card/card';
import { Header } from '../../components/header/header';
import { LIST_QUERY } from '../../services/listQuery';
import { useApolloClient } from '@apollo/client';
import { ContainerCard, ContainerSearch, LoadingText, MainContainer } from './mainPageStyle';
import { IPerson } from '../../interface/user';
import { UserContext } from '../../contexts/userContext';
import SearchContext from '../../contexts/searchContext';
import { toast } from 'react-toastify';

export const MainPage = () => {
  const apolloClient = useApolloClient();
  const { users, setUsers } = useContext(UserContext);
  const searchContext = useContext(SearchContext);
  const search = searchContext?.search;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apolloClient.query({
          query: LIST_QUERY,
        });
        setUsers(response?.data?.list);
        setLoading(false);
      } catch (error) {
        toast.error('Erro ao carregar');
      }
    };

    fetchData();
  }, [apolloClient, setUsers, search]);
  return (
    <>
      <MainContainer>
        <ContainerSearch>
          <Header />
        </ContainerSearch>
        <ContainerCard>
          {users?.length
            ? users?.map((user: IPerson) => {
                return <Card key={user._id} user={user} />;
              })
            : null}
          {loading && <LoadingText>Carregando...</LoadingText>}
        </ContainerCard>
      </MainContainer>
    </>
  );
};
