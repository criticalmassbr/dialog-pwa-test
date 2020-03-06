import React, { useState } from 'react';

import {
  Container,
  HeaderTitleContent,
  HeaderTitle,
  HeaderLogo,
  HeaderSearch,
  HeaderSearchButton,
  HeaderSearchContent,
} from './styles';

function Header ({ onSearch }) {
  const [search, setSearch] = useState('');

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.keyCode !== 13) return;

    onSearch(event.target.value);
    setSearch('');
  };

  return (
    <Container>
      <HeaderTitleContent>
        <HeaderLogo src={require('../../assets/icons/spotify-logo.svg')} />
        <HeaderTitle>
          Spotifynder
        </HeaderTitle>
      </HeaderTitleContent>
      <HeaderSearchContent>
        <HeaderSearch
          type="text"
          value={search}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Busque por artistas"
        />
        <HeaderSearchButton onClick={() => {
          onSearch(search);
          setSearch('');
        }}>
          <i className="fa fa-search" />
        </HeaderSearchButton>
      </HeaderSearchContent>
    </Container>
  );
}

export default Header;
