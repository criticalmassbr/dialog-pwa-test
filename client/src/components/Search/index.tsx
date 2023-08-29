import React, { useEffect, useRef } from 'react'
import { useMyContext } from '../../MyContext';

import { StyledSearch } from './styles';
import { Link } from 'react-router-dom';

const Search = ({off}:{off: boolean}) => {

  const { searchValue, setSearchValue } = useMyContext();

  // Ref para o input
  const inputRef = useRef<HTMLInputElement | null>(null); 

  useEffect(() => {
    // Focar no input após a renderização
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // função para guardar valor do input e chamar debounce
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }

  return (
    <StyledSearch>
      <Link to={'/'}>
        <img src="/mysocial.png" alt="logo"/>
      </Link>
      <input
        ref={inputRef}
        type="text" 
        placeholder='Search for a name...'
        value={searchValue}
        onChange={handleSearchInputChange}
        disabled={off}
      />
    </StyledSearch>
  )
}

export default Search
