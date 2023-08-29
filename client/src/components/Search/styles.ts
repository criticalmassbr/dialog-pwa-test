import styled from 'styled-components';

const StyledSearch = styled.div`

  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 2rem;
  
  & input {
    width: 100%;
    padding: 1rem;
    border-radius: 25px;
  }

  & img {
    width:200px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & input {
      width: 100%;
      margin-top: 1rem;
    }
  }
`;

export { StyledSearch }