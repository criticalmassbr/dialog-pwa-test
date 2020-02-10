import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const DivMusic = styled.div`
  border: 1px solid #282828;
  border-radius: 6px;
  width: 280px;
  height: 300px;
  background: #282828;
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 5px;
  object-fit: cover;
  object-position: center;
  background-image: no-repeat center top;
`;

export const NameMusic = styled.h2`
  color: #fff;
  font-family: sans-serif;
  font-size: 20px;
  margin-top: 15px;
`;
