/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Card, Grid, Container } from './styles';

const GridCards: any = ({ data }: any) => {
  return (
    <Container>
      <Grid>
        {data?.length === 0 && (
          <Card>
            <a href="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL829R_lNXse5BGsksfmOM3qbLJTypsvUwog&usqp=CAU"
                alt="404"
              />
              <div>
                <strong>Não foram encontrados usuários para a consulta</strong>
                <p>Tente mais tarde</p>
              </div>
            </a>
          </Card>
        )}
        {data.map((user: User) => (
          <Card>
            <a key={user._id} href={`/user-details/${user.name}/${user._id}`}>
              <img src={user.picture} alt={user.name} />
              <div>
                <strong>name: {user.name}</strong>
                <p>age: {user.age}</p>
                <p>eyeColor: {user.eyeColor}</p>
                <p>company: {user.company}</p>
                <p>email: {user.email}</p>
              </div>
            </a>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};
interface User {
  _id: string;
  index: number;
  age: number;
  picture: string;
  eyeColor: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  greeting: string;
  friends: User[];
}
export default GridCards;
