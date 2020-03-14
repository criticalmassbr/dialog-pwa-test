import React, { useEffect, useRef, useState } from 'react';
import { Center, Container, Input, SearchIcon } from './styles';

type Props = {
  handleSearch: (term: string) => void;
};
function Search({ handleSearch }: Props) {
  const [term, setTerm] = useState('');

  const debounce = useRef(0);
  const _onChange = ({ target: { value } }: any) => {
    if (debounce.current) clearTimeout(debounce.current);
    debounce.current = setTimeout(() => {
      setTerm(value);
    }, 500) as any;
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const _onMouseEnter = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  useEffect(() => {
    if (!handleSearch || !term) return;
    handleSearch(term);
  }, [term, handleSearch]);

  return (
    <Center>
      <Container>
        <SearchIcon />
        <Input
          ref={inputRef}
          name="search"
          type="text"
          placeholder="Search"
          onChange={_onChange}
          onMouseEnter={_onMouseEnter}
        />
      </Container>
    </Center>
  );
}

export default Search;
