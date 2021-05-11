import React from 'react';
import { useQuery, gql } from '@apollo/client';
import {
  Link
} from "react-router-dom";
import { Container, User } from './styles';


interface IList {
  _id: string;
  name: string;
  age: number;
  eyeColor: string;
  company: string;
  email: string;
  picture: string;
}

const getQuery = (name?: string) => {
  if (name) {
    return gql`
    {
      list(name: "${name}") {
        _id
        name
        age
        eyeColor
        company
        email
        picture
      }
    }
  `;
  }

  return gql`
    {
      list {
        _id
        name
        age
        eyeColor
        company
        email
        picture
      }
    }
  `;
};

interface ListUserProps {
  search: string;
  setSearch(value: React.SetStateAction<string>): void;
}

const ListUser: React.FC<ListUserProps> = ({search, setSearch}) => {
  const { loading, error, data } = useQuery(getQuery(search));
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Container>
        {!!data.list &&
          data.list.map(
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
                    <button>
                    <Link to={`/user/${user._id}`}>Detalhes</Link>
                    </button>
                  </div>
                </User>
              )
          )}
      </Container>
    </>
  );
};

export default ListUser;
