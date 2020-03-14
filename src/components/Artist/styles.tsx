import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  margin: 0 auto;
  padding: 1.5em 0;

  @media (max-width: 767px) {
    width: 50%;
  }
`;

export const Box = styled.div`
  flex: 1 0 50%;
`;

export const Title = styled(Box)`
  text-align: center;
  font-size: 1.25em;
  font-weight: bold;
`;

export const Cover = styled.img`
  width: 80%;
  height: auto;
  border-radius: 10em;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
