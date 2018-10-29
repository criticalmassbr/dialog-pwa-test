import styled from 'styled-components';

export const Container = styled.div`
  color: #1db954;
  display: grid;
  grid-template-areas:
    "header header header header"
    ". input input ."
    "artist artist artist artist";
`

export const PageHeader = styled.h1`
  grid-area: header;
  justify-self: center;
`
