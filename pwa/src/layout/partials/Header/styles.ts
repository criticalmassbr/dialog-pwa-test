import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  background: ${props => props.theme.colors.lightBackground};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);
  height: 15vh;

  > a {
    text-decoration: none;
    cursor: pointer;

    h1 {
      color: ${props => props.theme.colors.primary};
      font-size: 60px;
      font-family: 'Bebas Neue', cursive;
      font-weight: 400;
      padding: 10px 40px;
    }
  }

  > div {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

    .notifications-icon {
      position: relative;
      cursor: pointer;

      .badge {
        position: absolute;
        font-size: 0.7rem;
        font-weight: 700;
        background: ${props =>
          props.theme.title === 'light'
            ? props.theme.colors.secundary
            : props.theme.colors.primary};
        border-radius: 100%;
        height: 1rem;
        width: 1rem;
        text-align: center;
        color: ${props => props.theme.colors.background};
        top: 0;
        right: 0;
      }
    }

    svg {
      path {
        fill: ${props => props.theme.colors.alterColor};
      }
    }
  }

  @media (max-width: 700px) {
    > a {
      h1 {
        font-size: 45px;
        padding: 10px 20px;
      }
    }

    position: relative;
    margin-bottom: 60px;

    > div {
      .notifications-icon {
        margin-right: 20px;
      }

      .search {
        position: absolute;
        bottom: -80%;
        left: 0;

        input {
          height: 50%;
        }
      }
    }
  }
`;
