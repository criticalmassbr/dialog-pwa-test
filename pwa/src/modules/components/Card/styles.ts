import styled, { css, keyframes } from 'styled-components';

const fadeInOpacity = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 0.85;
	}
`;

export const Container = styled.div`
  width: auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);
  display: grid;
  grid-template-rows: 1fr 0.7fr;
  background: ${props => props.theme.colors.lightBackground};
  position: relative;
  overflow: hidden;

  .picture {
    width: 100%;
    height: 190px;
    position: relative;
    transition: transform 1s;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      position: relative;
      top: -20%;
    }

    &:hover {
      transform: scale(1.1);
      overflow: hidden;

      .cover {
        opacity: 0.8;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .cover {
      display: none;
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      background: ${props =>
        props.theme.title === 'light'
          ? props.theme.colors.primary
          : props.theme.colors.lightBackground};
      color: ${props =>
        props.theme.title === 'light'
          ? props.theme.colors.background
          : props.theme.colors.color};
      font-weight: 700;
      transform: none;
      animation-name: ${fadeInOpacity};
      animation-iteration-count: 1;
      animation-timing-function: ease-in-out;
      animation-duration: 0.25s;
    }
  }

  .content {
    display: flex;
    padding: 20px;
    flex-direction: column;
    height: 100%;

    .user {
      font-weight: 700;
      margin-bottom: 20px;
      font-size: 1rem;
    }

    .user,
    .company,
    .phone {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .company,
    .phone {
      padding-left: 5px;
      font-size: 1rem;
      margin-bottom: 10px;
    }

    a {
      button {
        display: none;
      }
    }
  }

  @media (max-width: 700px) {
    height: auto;

    .content {
      > a {
        width: 100%;
        text-decoration: none;

        button {
          display: block;
          margin-top: 20px;
          width: 100%;
        }
      }
    }
  }
`;
