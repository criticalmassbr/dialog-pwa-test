import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

import * as C from "~/styles/Constants";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  body {
    background: #FFF;
    line-height: 1.3;
    font-size: 100%;
    font-family: "robotoregular", sans-serif;
  }

  a {
    text-decoration: none;
  }

  ol,
  ul {
    list-style: none;
  }

  button {
    border: 0;
    outline: none;
    appearance: none;
    background-color: transparent;
  }

  section {
    padding: 20px 0;
  }

  input:not([type=radio]),
  select,
  textarea {
    appearance: none;
    border: none;
  }

  hr{
    border: .5px solid ${C.LIGHT_GREY};
  }

  .card {
    padding: 10px;
    
    a {
      color: ${C.DARK_GREY};
    }
    
    img {
      display: inline-block;
      width: 100%;
      margin: 0 auto;
      border-radius: 50%;
      border: 1px solid ${C.MEDIUM_GREY};
    }
  }

  .icon-text-global {
    margin-top: 15px;
    
    i,
    span {
      color: ${C.BLUE};
    }
    
    p {
      color: ${C.DARK_GREY};
      font-size: 12px;
      line-height: 12px;
    }

    i {
      margin-right: 7px;
    }

    &.border-outlined {
      i {
        font-weight: lighter;
        width: 18px;
        height: 18px;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${C.BLUE};
        background: ${C.WHITE};
        border-radius: 50%;
        box-shadow: 0 0 0px 1px white, 0 0 0px 3px ${C.BLUE};
      }
    }

    &.border-full {
      i {
        width: 20px;
        height: 20px;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background: ${C.BLUE};
        border-radius: 50%;
        box-shadow: 0 0 0px 1px white, 0 0 0px 2px ${C.BLUE};
      }
    }
  }

  ${media.greaterThan("320px")`
    .hide-xs {
      display: none !important;
    }
    .display-xs {
      display: block !important;
    }
  `}

  ${media.greaterThan("medium")`
    .hide-sm {
      display: none !important;
    }
    .display-sm {
      display: block !important;
    }
  `}

  ${media.greaterThan("1024px")`
    .hide-md {
      display: none !important;
    }
    .display-md {
      display: block !important;
    }
  `}
`;

export default GlobalStyles;
