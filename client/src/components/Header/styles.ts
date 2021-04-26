import styled from "styled-components";


export const Container = styled.header`
  background-color: #0EB27B;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;

  h4 {
    margin-left: 15px;
  }  
`;

export const Search = styled.input`
    border-radius: 10px;
    width: 500px;
    height: 30px;
    margin-left: 30px;
    margin-right: 10px;
    -webkit-appearance: none;
    border: 0;

    &:focus {
      outline: 0;
    }
`;