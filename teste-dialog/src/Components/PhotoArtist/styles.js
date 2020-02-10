import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const DivArtist = styled.div`
  border: 1px solid #282828;
  border-radius: 6px;
  width: 300px;
  height: 150px;
  display: flex;
  background: #282828;
`;

export const Artist = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100px;
  border-radius: 4px;
  margin-right: 15px;
  object-fit: cover;
  object-position: center;
  border-radius: 50px;
`;

export const Name = styled.h2`
  color: #fff;
  font-family: sans-serif;
  font-size: 20px;
  margin-left: 15px;
`;
