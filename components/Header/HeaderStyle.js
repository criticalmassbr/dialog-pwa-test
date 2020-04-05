import styled from 'styled-components';
import * as C from '~/styles/Constants';

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background: ${C.YELLOW};

  .title {
    color: ${C.BLUE};
  }

  p {
    line-height: 23px;
    text-transform: capitalize;
  }

  div {
    height: 45px;
  }

  img {
    max-width: 61px;
    width: 100%;
    height: auto;
  }

  i {
    cursor: pointer;

    &:first-of-type {
      margin-left: 8px;
      font-size: 20px;
    }
  }
`
