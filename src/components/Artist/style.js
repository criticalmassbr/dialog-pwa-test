import styled from 'styled-components';
import { boxStyle } from '../AlbumListItem/style';

export const Container = styled.div`
  ${boxStyle}
  align-items: center;
  grid-area: 2 / 1 / 2 / span 2;
  margin-bottom: 2rem;
`;

export const Image = styled.img`
  border-radius: 50%;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3);
  display: block;
  height: 9rem;
  object-fit: cover;
  width: 9rem;
`;

export const Name = styled.div`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 500;
  margin-left: 2.5rem;
`;
