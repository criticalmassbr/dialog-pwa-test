import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px;
  display: inline-flex;
  justify-content: center;
`;

export const List = styled.ul`
  text-align: center;
  list-style: none;
`;

export const ListMusic = styled.li`
  border: 1px solid #282828;
  border-radius: 6px;
  max-width: 600px;
  min-width: 300px;
  background: #282828;
  flex: 1;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  padding: 20px;
`;

export const Image = styled.img`
  width: 100%;
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
