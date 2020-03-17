import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  height: 46px;
  background-color: ${props => props.theme.colors.inputBackground};

  align-items: center;
  border-radius: 5px;
`;

export const Input = styled.input`
  flex: 1;
  border: 0;
  height: 46px;
  background: 0;
  font-size: 16px;

  &::placeholder {
    color: ${props => props.theme.colors.textRegular};
  }
`;
