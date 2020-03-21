import styled from 'styled-components';
import { MdPlayCircleFilled } from 'react-icons/md';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;

  width: 235px;
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 5px;
  padding: 16px;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
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

  &:hover {
    transform: scale(1.1);
  }
`;
