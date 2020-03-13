import styled from 'styled-components'

export const AlbumsWrapper = styled.section`
  margin-top: 60px;
  padding-bottom: 80px;

  @media (max-width: 580px) {
    margin-top: 30px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 10px;
    position: relative;
    margin-bottom: 32px;

    @media (max-width: 700px) {
      margin-bottom: 24px;
    }

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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`

export const P = styled.p`
  text-align: center;
  color: #666;
`
