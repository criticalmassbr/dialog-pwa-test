import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  height: 46px;

  span {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    flex: 1;
  }
`;
