import { useContext, useEffect } from 'react';
import { Card } from '../../components/card/card';
import { Header } from '../../components/header/header';
import { UserAvatar } from '../../components/userAvatar/userAvatar';
import { UserContext } from '../../contexts/userContext';
import { useApolloClient } from '@apollo/client';
import { useParams } from 'react-router-dom';
import {
  ContainerButton,
  ContainerCard,
  ContainerSearch,
  LoadingText,
  MainContainer,
  TitleContainerCard,
} from './userDetailsStyle';
import SearchContext from '../../contexts/searchContext';
import { LIST_QUERY } from '../../services/listQuery';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const UserDetails = () => {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  const { search, setLoading } = useContext(SearchContext);
  const { _id } = useParams();
  const apolloClient = useApolloClient();
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
  }, [apolloClient, setUsers, search, setLoading]);
  const verifiedUser = users?.find((user) => user._id === _id);
  const verifyUser = () => {
    if (verifiedUser) {
      return verifiedUser;
    } else {
      return false;
    }
  };
  const handleClicked = () => {
    navigate(`/`);
  };

  return (
    <>
      <MainContainer>
        <ContainerSearch>
          <Header isHidden={true} />
          <ContainerButton onClick={handleClicked}>Voltar</ContainerButton>
        </ContainerSearch>
        {verifyUser() ? (
          <>
            <UserAvatar selectUser={verifiedUser} />
            <TitleContainerCard>Amigos</TitleContainerCard>

            <ContainerCard>
              {verifiedUser?.friends?.map((user) => {
                return <Card key={user._id} user={user} />;
              })}
            </ContainerCard>
          </>
        ) : (
          <LoadingText>Usuário selecionado sem informações</LoadingText>
        )}
      </MainContainer>
    </>
  );
};
