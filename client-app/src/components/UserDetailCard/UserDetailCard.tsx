/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Container, Card } from './styles';

const UserDetailCard: any = ({ data }: any) => {
  return (
    <Container>
      <Card>
        <img src={data.picture} alt={data.name} />
        <div>
          <strong>name: {data.name}</strong>
          <p>age: {data.age}</p>
          <p>email: {data.email}</p>
        </div>
      </Card>
    </Container>
  );
};
export default UserDetailCard;
