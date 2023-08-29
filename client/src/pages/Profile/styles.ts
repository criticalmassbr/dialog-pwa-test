import styled from 'styled-components';

const StyledProfile = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;

  & > h2 {
    text-align: center;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  gap: 1rem;

  & > span {
    background-color: #def7d4;
    padding: 10px 20px;
    border-radius: 10px;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 1rem;
  }

  & > div img {
    border-radius: 15px;
  }

  & > div p {
    margin: 0;
  }

  & > div h2 {
    margin: 0 0 8px 0;
  }

  & > div p span {
    font-weight: bold;
    color: #ff5757;
  }

  @media (max-width: 500px) {
    & > div {
      flex-direction: column;
    }

    & > div h2 {
      text-align: center;
    }
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 3rem 0;

  & a {
    padding: 10px 20px;
    background-color: #ff5757;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    transition: all 0.5s;
  }
  & a:hover {
    background-color: #ff8080;
  }
`

export { StyledProfile, ProfileBox, Title }