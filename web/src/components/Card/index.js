import React from 'react';

import { Container } from './styles';

export default function Card({ data, setUserSearch }) {

  return (
    <Container to={{pathname: `/detail/${data._id}`}} params={ setUserSearch }>
      <li key={String(data._id)}>
          <img src={data.picture} alt={data.title} />
          <strong>Name: {data.name} </strong>
          <strong>Age: {data.age}</strong>
          <strong>EyeColor: {data.eyeColor}</strong>
          <strong>Company: {data.company}</strong>
          <strong>Email: {data.email}</strong>
        </li>
    </Container>
  );
}
