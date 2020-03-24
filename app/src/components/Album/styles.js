import styled from 'styled-components';
import { MdPlayCircleFilled } from 'react-icons/md';
import { device } from '~/styles/sizes';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;

  @media ${device.mobileL} {
    margin: 12px auto;
  }

  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 5px;
  padding: 16px;
  border: ${props => props.border && '1px solid #ddd'};

  img {
    width: 100%;
    height: 100%;
  }

  span {
    margin: 10px 0 30px;
    font-weight: bold;
    color: ${props => props.theme.colors.mainText};
    font-size: 16px;
  }
`;

export const Player = styled(MdPlayCircleFilled).attrs(props => ({
  color: props.theme.colors.secondary,
}))`
  position: absolute;
  bottom: 10px;
  right: 15px;
  transition: transform 0.1s ease-in-out;

  display: ${props => (props.visible ? 'block' : 'none')};

  @media ${device.mobileL} {
    display: block;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
