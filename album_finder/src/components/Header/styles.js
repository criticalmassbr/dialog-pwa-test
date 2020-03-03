import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  width: 100%;
  max-width: 900px;

  justify-content: center;
  align-content: center;

  grid-gap: 20px;
  justify-items: center;
`;

export const Title = styled.h1`
  font-size: 48px;
`;
