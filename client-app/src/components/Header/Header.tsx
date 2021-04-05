import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Title, Form, Container } from './styles';

const Header: any = ({ setQueryName }: any) => {
  const [name, setName] = useState('');
  useEffect(() => {
    const nameQuery = localStorage.getItem('@nameQuery');
    if (nameQuery) {
      setName(nameQuery);
    }
  }, []);
  const search = (event: FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    setQueryName(name);
  };
  return (
    <Container>
      <Link to="/">
        <Title>MySocial</Title>
      </Link>
      <Form onSubmit={search}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Type the name of user"
        />
        <button type="submit">Search</button>
      </Form>
    </Container>
  );
};

export default Header;
