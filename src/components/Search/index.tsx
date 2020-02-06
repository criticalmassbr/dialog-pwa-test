import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from '../../store';
import * as ArtistsActions from '../../store/ducks/artists/actions';

import { Container, FormContainer, Form, Input } from './styles';

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const timer = useRef<number>(0);
  const dispatch = useDispatch();

  const { loading } = useSelector((state: ApplicationState) => state.artists);

  const handleSearch = (value: string) => {
    setSearch(value);
    clearTimeout(timer.current);

    timer.current = setTimeout(
      () => dispatch(ArtistsActions.loadRequest(value)),
      500,
    );
  };

  return (
    <Container>
      <FormContainer>
        <Form>
          <Input
            placeholder="Pesquisar"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSearch(e.target.value)
            }
          />
          {loading && <i className="fa fa-spinner fa-pulse" />}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Search;
