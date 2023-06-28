import { useContext, useEffect } from 'react';
import { useApolloClient } from '@apollo/client';
import { SearchInput, Title } from './headerStyle';
import SearchContext from '../../contexts/searchContext';
import { LIST_QUERY } from '../../services/listQuery';
import { toast } from 'react-toastify';
import { UserContext } from '../../contexts/userContext';

interface IHeader {
  isHidden?: boolean;
}
export const Header = ({ isHidden }: IHeader) => {
  const apolloClient = useApolloClient();
  const { search, setSearch, setLoading } = useContext(SearchContext);
  const { setUsers } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apolloClient.query({
          query: LIST_QUERY,
          variables: { name: search },
        });
        setUsers(response?.data?.list);
        setLoading(false);
      } catch (error) {
        toast.error('Erro ao carregar');
      }
    };

    fetchData();
  }, [apolloClient, setUsers, search, setLoading]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Title>MySocial</Title>
      <SearchInput
        type='text'
        placeholder='Procure por alguém'
        onChange={handleChange}
        hidden={isHidden}
      />
    </>
  );
};
