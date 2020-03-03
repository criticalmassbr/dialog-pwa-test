import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  background: #f9f9f9;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 4px 8px rgba(0, 0, 0, 0.05);

  border-radius: 5px;
`;

export const Cover = styled.img`
  width: 170px;
`;

export const Divider = styled.div`
  background: #040404;
  width: 25px;
  height: 2px;
  margin: 10px 0;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: normal;
  color: black;
`;
