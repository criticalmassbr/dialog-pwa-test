import React from 'react';

import { Form } from '@unform/web';

import { Container } from './styles';
import Input from '~/components/Input';
import Header from '~/components/Header';

export default function Home() {
  function handleSubmit(data) {
    // eslint-disable-next-line no-console
    console.log(data);
  }

  return (
    <Container>
      <Header />

      <Form onSubmit={handleSubmit}>
        <Input name="search" icon />
      </Form>
    </Container>
  );
}
