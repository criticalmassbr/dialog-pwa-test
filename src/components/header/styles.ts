import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 200px;
  }
  @media (min-width: 768px) {
    justify-content: left;
    flex-direction: row;
  }
`;
export const Input = styled.div`
  display: flex;
  input {
    width: 200px;
    padding: 10px;
    border: none;
    border-radius: 10px 0 0 10px;
    :focus {
      outline: none;
    }
  }
  button {
    background-color: transparent;
    border: none;
    padding: 0 15px 0 0;
    background-color: #fff;
    border-radius: 0 10px 10px 0;
    height: 35px;

    svg {
      height: 100%;
      color: #0b9154;
    }
  }
`;
