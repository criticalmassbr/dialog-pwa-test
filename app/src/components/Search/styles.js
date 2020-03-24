import styled from 'styled-components';

import { device } from '~/styles/sizes';

export const Container = styled.div``;

export const Form = styled.div`
  width: 50%;
  margin: 36px auto;

  @media ${device.tablet} {
    width: 80%;
  }

  @media ${device.mobileL} {
    width: 90%;
    margin: 24px auto;
  }
`;
