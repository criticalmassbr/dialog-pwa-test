import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Query from './components/Query/Query';
import Search from './components/Search';
import { Container, GlobalStyle, Header, SearchSection, Title } from './styles';

const theme = {
  main: 'mediumseagreen',
};

function App() {
  const [artist, setTerm] = useState('');
  const _handleSearch = (term: string) => {
    setTerm(term);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header>
          <Title>Album Finder</Title>
        </Header>
        <SearchSection>
          <Search handleSearch={_handleSearch} />
        </SearchSection>
        <Query artist={artist} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
