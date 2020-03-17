import React from 'react';

import { Form } from './styles';

import Input from '~/components/Input';

export default function Search() {
  function handleSubmit() {}

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="search" placeholder="Search for an artist" icon />
    </Form>
  );
}
