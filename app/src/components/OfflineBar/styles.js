import styled from 'styled-components';
import { device } from '~/styles/sizes';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 46px;
  background-color: #fe654f;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;

  span {
    font-size: 20px;
    font-weight: bold;

    @media ${device.mobileL} {
      font-size: 14px;
    }
  }
`;
