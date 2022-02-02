import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 250px;
  height: 360px;
  padding: 20px;
  border: 1.5px solid #000;
  border-radius: 20px 15px 20px 15px;
  background-color: #fff;
  margin: 15px;
  img {
    margin: auto;
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;
export const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  p {
    margin: 2px;
  }
`;
