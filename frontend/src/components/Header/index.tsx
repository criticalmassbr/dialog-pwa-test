import React, { FunctionComponent, SyntheticEvent } from 'react';
import styled from "styled-components";
import colors from "../../assets/css/colors"

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top:1vh;
  padding-bottom:1vh;
`;

const Logo = styled.div`
  color:${colors.secondary};
  cursor: pointer;
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 2em;
  font-stretch: ultra-expanded;
  font-weight:bold;
  margin:0px 1vw 0px 1vw;
  @media(max-width:575px){
    display:none;
  }
`;

const SearchBar = styled.input`
  border-width: 1px;
  border-radius: 2em;
  font-size:0.8em;
  line-height: 3em;
  margin:0 1vw;
  padding-left:1em;
  width:30em;
  &:focus {
    outline:none;
  };
  @media (max-width: 575px) {
    margin:0 10vw 5vh 10vw;
    width:125vw;
  };
`;

const Header: FunctionComponent<{
  setFilter: Function,
  showSelectedDetails: Function,
  selected: boolean,
  filter: string
}> = ({ filter, setFilter, showSelectedDetails, selected }) => {
  const onClick = (e: SyntheticEvent) => {
    e.preventDefault();
    setFilter("");
    showSelectedDetails(null);
  };

  return (
    <Container>
      <Logo onClick={onClick}>MySocial</Logo>
      <SearchBar
        data-testid="searchBar"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="search"
      />
    </Container>);
}

export default Header;