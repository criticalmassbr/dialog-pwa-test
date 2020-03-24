import styled from 'styled-components';
import { device } from '~/styles/sizes';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  height: 56px;
  box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);
  position: relative;

  span {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #f5f5f5;
    text-transform: capitalize;

    @media ${device.mobileL} {
      font-size: 22px;
    }
  }

  nav {
    position: absolute;
    right: 14px;
  }
`;
