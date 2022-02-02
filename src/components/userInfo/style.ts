import styled from "styled-components";

export const UserContainer = styled.section`
  display: flex;
  align-items: center;
  margin: 15px 0 15px 0;
  img {
    width: 100px;
    height: 100px;
    margin-left: 23px;
    object-fit: cover;
    border-radius: 50%;
  }
  @media (min-width: 768px) {
    margin: 0 0 15px 0;

    img {
      width: 150px;
      height: 150px;
      margin-left: 50px;
    }
  }
`;

export const UserInfoText = styled.div`
  margin-left: 20px;
  p {
    color: #fff;
  }
`;
