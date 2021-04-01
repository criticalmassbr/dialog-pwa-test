import styled from 'styled-components';

export const UserList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
  text-decoration: none;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }

  img {
    align-self: center;
    max-width: 250px;
    border-radius: 15px;
    background: #888;
  }

`;

export const Label = styled.div`
  font-size: 40px;
  line-height: 20px;
  color: #777;
  margin: 90px 40px 40px 0;
  align-self: center;

`
export const UserDetail = styled.div`
margin-bottom: 1rem;
font-size: 24px;
gap: 15px;
width: 100%;
flex-wrap: wrap;
display: flex;
  img {
    width: 160px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const DetailUser = styled.div`
  margin-top: 0.5rem;
`

export const InfoUser = styled.div`
  display: flex;
  gap: 5px;
`
