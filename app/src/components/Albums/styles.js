import styled from 'styled-components';
import { device } from '~/styles/sizes';

export const Container = styled.ul`
  width: 90%;
  margin: 50px auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 16px;
  }
`;
