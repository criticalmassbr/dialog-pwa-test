import styled from 'styled-components';

export const Title = styled.div`
  font-size: 32px;
  color: #016fb9;
  font-weight: bold;
  font-family: 'Nunito Sans', sans-serif;
  margin-top: 32px;
  margin-bottom: 16px;
  text-align: center;
`;

export const SearchInput = styled.input`
  width: 280px;
  height: 52px;
  border-radius: 5px;
  background-color: #d9d9d9;
  margin-bottom: 32px;
  @media (min-width: 1024px) {
    width: 450px;
  }
`;
