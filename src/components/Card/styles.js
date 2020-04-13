import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  border: 1px solid #b6cad4;
  border-radius: 4px;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 380px;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.4);
  @media (max-width: 520px) {
    width: 100%;
  }
  img {
    margin-bottom: 20px;
    width: 200px;
    height: 200px;
  }
  h3 {
    align-self: center;
  }
`;
