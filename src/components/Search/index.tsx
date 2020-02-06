import React from 'react';

import { Container, FormContainer, Form, Input } from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <Form>
          <Input placeholder="Pesquisar" />
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Search;
