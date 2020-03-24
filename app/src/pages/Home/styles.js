import styled from 'styled-components';
import { device } from '~/styles/sizes';

export const Container = styled.div`
  > h1 {
    text-align: center;
    margin-top: 28px;
    font-size: 36px;

    @media ${device.mobileL} {
      font-size: 24px;
    }
  }
`;

export const SelectText = styled.h1`
  text-align: center;
  color: #7159c1;
`;
