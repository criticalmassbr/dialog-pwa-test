import { Search, Wrapper } from '../../components'
import { StyledHome } from './styles'
import { gql, useLazyQuery } from '@apollo/client';
import client from '../../client'
import { debounce } from 'lodash'
import { useEffect } from 'react';
import { useMyContext } from '../../MyContext';

const LIST_USERS = gql`
  query ListUsers($searchName: String) {
    list(name: $searchName) {
      _id
      picture
      age
      eyeColor
      company
      email
      phone
      name
      greeting
      friends {
        _id
        picture
        age
        eyeColor
        company
        email
        phone
        name
      }
    }
  }
`

const Home = () => {

  const { searchValue,  setUsers, users } = useMyContext();

  // definição da chamada para API
  const [getData, { loading, data, error }] = useLazyQuery(LIST_USERS, { client });

  // definição da chamada para API através de debounce
  const debouncedGetData = debounce((value: string) => {
    getData({
      variables: {
        searchName: value,
      },
    });
  }, 500);

  // Chamada através de debounce
  useEffect(() => {
    debouncedGetData(searchValue);
  }, [debouncedGetData, searchValue]);

  // Atualizar o estado de users após obter os dados da API
  useEffect(() => {
    if (data) {
      setUsers(data.list || []);
    }
  }, [data, setUsers]);

  // tratamento de erro
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <StyledHome>
      <Search off={false}/>
      <Wrapper users={users} clickable={true}/>
    </StyledHome>
  )
}

export default Home