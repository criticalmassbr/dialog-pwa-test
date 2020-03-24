import styled from 'styled-components';
import { device } from '~/styles/sizes';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 400px;
  margin: 10px auto;

  @media ${device.mobileL} {
    min-width: auto;
    flex-direction: column;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  width: 210px;
  height: 210px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 2.5px solid #7159c1;

  img {
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
  }
`;

export const Info = styled.div`
  margin-left: 18px;

  h1,
  span {
    text-transform: uppercase;
    letter-spacing: 1.11px;
  }

  h1 {
    color: ${props => props.theme.colors.mainText};
    @media ${device.mobileL} {
      font-size: 20px;
    }
  }

  span {
    font-size: 13px;
  }

  @media ${device.mobileL} {
    margin-top: 14px;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
