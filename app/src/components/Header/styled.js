import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  padding: 44px 0;
  margin: 0 auto;
  max-width: 700px;
  text-align: center;

  .logo {
    font-size: 48px;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    position: relative;

    &:hover:after {
      width: 80%;
      bottom: -6px;
    }

    &:after {
      content: '';
      background: linear-gradient(90deg, var(--main-color) 0%, var(--sub-color) 100%);
      display: block;
      height: 4px;
      width: 95%;
      position: absolute;
      bottom -4px;
      left: 50%;
      transform: translateX(-50%);
      will-change: width, bottom;
      transition: .3s;
    }
  }
`
