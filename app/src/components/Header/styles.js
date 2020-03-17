import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  height: 56px;
  box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);

  span {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    flex: 1;
    /* color: #f5f5f5 */
    color: ${props => props.theme.colors.textHighEmphasis};
  }
`;
