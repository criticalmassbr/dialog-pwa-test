import React, { useCallback, useContext, useRef, useState } from 'react';
import { MdSearch } from 'react-icons/md'
import { FriendsContext } from '../../../state/contexts/FriendsContext';
import { Container } from './styles';

interface Props {
  text: string;
  className?: string;
}

const Search: React.FC<Props> = ({ text, className }) => {
  const inputRef = useRef(null);
  const [itemToSearch, setItemToSearch] = useState('');
  const friendsContext = useContext(FriendsContext);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    setItemToSearch(e.target.value);

    friendsContext.setSearched(e.target.value);
  }, []);

  return (
    <Container className={className}>
      <form onChange={handleSearch} role="search">
        <fieldset>
          <MdSearch size="2rem" />
          <input ref={inputRef} id="search" type="search" placeholder={text} autoFocus required />
        </fieldset>
      </form>
    </Container>
  );
}

export default Search;