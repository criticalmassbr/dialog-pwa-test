import styled from "styled-components";

export const FriendsListContainer = styled.main`
  margin: 0 auto;
  display: grid;
  max-width: 1120px;
  justify-content: space-around;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, 280px); ;
`;
