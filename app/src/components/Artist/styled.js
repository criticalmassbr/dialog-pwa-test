import styled from 'styled-components'

export const ArtistWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const AvatarWrapper = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 200px;
  height: 200px;
  flex: 0 0 200px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
`

export const ArtistText = styled.div`
  margin-left: 30px;

  .title {
    font-weight: bold;
    font-size: 32px;
  }

  .artist {
    margin-top: 8px;
    color: #666;
    font-size: 12px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
  }
`
