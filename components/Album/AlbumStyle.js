import styled from 'styled-components';
import * as C from '~/styles/Constants';
import media from "styled-media-query";

export const CardAlbum = styled.div`
  background-color: ${C.WHITE};
  border: 1px solid ${C.DARK_GREY};
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
  color: ${C.DARK_GREY};
  display: block;
  padding: 1rem;
  overflow: scroll;
  font-family: 'robotolight';

  .album-sprite {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  ${media.lessThan("768px")`
    width: 80%;
    margin: 0 auto;
  `}
`;
