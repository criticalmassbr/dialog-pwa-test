import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 250px;
  height: 360px;
  padding: 20px;
  border: 1.5px solid #000;
  border-radius: 20px 15px 20px 15px;
  background-color: #fff;
  img {
    width: 100%;
  }
`;
export const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  p {
    margin: 2px;
  }
`;
