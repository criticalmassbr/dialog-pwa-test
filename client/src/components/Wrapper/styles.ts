import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  align-items: center;

  padding: 30px;
`;

const UserBox = styled.div`
  padding: 30px;
  border: solid 2px #e6e6e6;
  border-radius: 20px;
  transition: all 0.5s;

  & img {
    width:100%;
    border-radius: 10px;
    margin-bottom: 30px;
  }

  & p {
    margin: 0;
    font-size: 15px;
  }

  & span {
    font-weight: bold;
    color: #ff5757;
  }

  &:hover{
    border: solid 2px #737373;
  }
`;



export { StyledWrapper, UserBox }