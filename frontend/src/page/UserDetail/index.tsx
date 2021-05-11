import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Container, User } from './styles';
import ListUser from '../ListUser'

interface UrlParamUserDetail {
  id: string;
}

interface IList {
  _id: string;
  name: string;
  age: number;
  eyeColor: string;
  company: string;
  email: string;
  picture: string;
  friends: IList[];
}
interface UserDetailProps {
  search: string;
  setSearch(value: React.SetStateAction<string>): void;
}

const UserDetail: React.FC<UserDetailProps> = ({search, setSearch}) => {
  const { id } = useParams<UrlParamUserDetail>();
  const queryGetById = gql`
    {
      getById(id: "${id}") {
        _id
        name
        age
        eyeColor
        company
        email
        picture
        friends {
          _id
          name
          age
          eyeColor
          company
          email
          picture
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(queryGetById);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if(!data.getById[0]) return <p>Not found :(</p>;

  if(search) {
    return (<ListUser search={search} setSearch={setSearch} />)
  }

    return (
      <>
        <Container>
          {!!data.getById &&
            data.getById.map(
              (user: IList, k: number) =>
                !!user && (
                  <User key={user._id}>
                    <img src={user.picture} alt={user.name} />
                    <div>
                      <h3>{user.name}</h3>
                      <p>{user.age}</p>
                      <p>{user.email}</p>
                    </div>
                  </User>
                )
            )}
        </Container>
        <Container>
          {!!data.getById &&
            data.getById[0].friends.map(
              (user: IList, k: number) =>
                !!user && (
                  <User key={user._id}>
                    <img src={user.picture} alt={user.name} />
                    <div>
                      <h3>{user.name}</h3>
                      <p>{user.age}</p>
                      <p>{user.eyeColor}</p>
                      <p>{user.company}</p>
                      <p>{user.email}</p>
                    </div>
                  </User>
                )
            )}
        </Container>
      </>
    );
};

export default UserDetail;
