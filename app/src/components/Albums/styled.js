import styled from 'styled-components'

export const AlbumsWrapper = styled.section`
  margin-top: 60px;
  padding-bottom: 80px;

  h2 {
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 10px;
    position: relative;

    &:after {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.05);
    }
  }
`

export const AlbumList = styled.ul`
  display: flex;
  margin: 32px -16px 0;

  li {
    flex: 33.33%;
    padding: 0 16px;
  }
`
