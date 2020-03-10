import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.3);

  &:hover [data-album-desc] {
    opacity: 1;
  }
`;

export const AlbumCover = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const AlbumDescription = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  padding: 12px;
  background-color: rgba(0,0,0,.8);
  z-index: 10;
  opacity: 0;
  transition: all .2s ease-out;
`;

export const PlayIcon = styled.i`
  color: #fff;
  font-size: 28px;
  transition: all .3s;

  @media (max-width: 768px) {
    font-size: 60px;
  }
`;

export const AlbumName = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  margin: 0px;
  margin-top: 24px;
  text-align: center;
  transition: all .3s;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
