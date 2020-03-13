import styled from 'styled-components'

export const ArtistWrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-areas: '. avatar text .';
  align-items: center;
  justify-items: end;
  grid-gap: 30px;

  @media (max-width: 580px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 0.3fr;
    grid-gap: 10px;
    grid-template-areas:
      'avatar'
      'text';
    justify-items: center;
  }
`
export const AvatarWrapper = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 200px;
  height: 200px;
  grid-area: avatar;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
`

export const ArtistText = styled.div`
  grid-area: text;
  justify-self: start;

  @media (max-width: 580px) {
    justify-self: center;
    text-align: center;
  }

  .title {
    font-weight: bold;
    font-size: 32px;

    @media (max-width: 580px) {
      font-size: 24px;
    }
  }

  .artist {
    margin-top: 8px;
    color: #666;
    font-size: 12px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
  }
`
