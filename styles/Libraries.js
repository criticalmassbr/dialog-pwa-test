import { createGlobalStyle } from "styled-components";

import * as C from "./Constants";

const LibsStyle = createGlobalStyle`
  .over-hidden{
    overflow: hidden;
  }

  /* FLEX */
  .flex {
    display: flex !important;
    &.col {
      flex-direction: column;
    }
    &.col-r {
      flex-direction: column-reverse;
    }
    &.row {
      flex-direction: row;
    }
    &.row-r {
      flex-direction: row-reverse;
    }
    &.wrap {
      flex-wrap: wrap;
    }
    &.wrap-r {
      flex-wrap: wrap-reverse;
    }
    &.nwrap {
      flex-wrap: nowrap;
    }
    &.cont-start {
      justify-content: flex-start;
    }
    &.cont-end {
      justify-content: flex-end;
    }
    &.cont-center {
      justify-content: center;
    }
    &.cont-spbet {
      justify-content: space-between;
    }
    &.cont-sparo {
      justify-content: space-around;
    }
    &.cont-speve {
      justify-content: space-evenly;
    }
    &.align-itstart {
      align-items: flex-start;
    }
    &.align-itend {
      align-items: flex-end;
    }
    &.align-itcenter {
      align-items: center;
    }
    &.align-itstretch {
      align-items: stretch;
    }
    &.align-itbase {
      align-items: baseline;
    }
    &.align-ctstart {
      align-content: flex-start;
    }
    &.align-ctend {
      align-content: flex-end;
    }
    &.align-ctcenter {
      align-content: center;
    }
    &.align-ctstretch {
      align-content: stretch;
    }
    &.align-ctspbet {
      align-content: space-between;
    }
    &.align-ctsparo {
      align-content: space-around;
    }
    .grow {
      flex-grow: 1;
    }
    .grow-2 {
      flex-grow: 2;
    }
    .no-grow {
      flex-grow: 0;
    }
    .shrink {
      flex-shrink: 0;
    }
  }

  /*** FONTS SIZES rem
  /*********************/
  .fn-s9px{
    font-size: 0.5625rem;
  }

  .fn-s10px{
    font-size: 0.625rem;
  }

  .fn-s12px{
    font-size: 0.75rem;
  }

  .fn-s14px{
    font-size: 0.875rem;
  }

  .fn-s16px{
    font-size: 1rem;
  }

  .fn-s18px{
    font-size: 1.125rem;
  }

  .fn-s20px{
    font-size: 1.25rem;
  }

  .fn-s30px{
    font-size: 1.875rem;
  }



  /*** FONTS
  /*********************/
  .has-text-centered {
    text-align: center;
  }
  .tx-justify {
    text-align: justify;
  }
  .tx-right{
    text-align: right;
  }
  .tx-up {
    text-transform: uppercase;
  }
  .tx-ca {
    text-transform: capitalize;
  }
  .tx-du {
    text-decoration: underline;
  }
  .tx-dl {
    text-decoration: line-through;
  }
  .tx-dn {
    text-decoration: none;
  }
  .fn-wnb {
    font-weight: normal;
  }
  .fn-wb {
    font-weight: bold;
  }

  /* LINE HEIGHT */
  .ln-h11px{
    line-height: 11px;
  }

  .ln-h19px{
    line-height: 19px;
  }

  .ln-h21px{
    line-height: 21px;
  }

  .ln-h24px{
    line-height: 24px;
  }

  .rotat-l-45 {
    transform-origin: right bottom; /* or 100% 100%, same thing */
  transform:
    rotate(90deg)
    translate(0, -100%) /* go from bottom right to top right */
    rotate(90deg)
    translate(0, 100%);
    color: #CCC;
  }

  /* BACKGROUND COLORS */
  .bg-none{
    background: none;
  }
  .bg-blue{
    background: ${C.BLUE};
  }
  .bg-yellow{
    background: ${C.YELLOW};
  }
  .bg-darkgrey{
    background: ${C.DARK_GREY};
  }
  .bg-black{
    background: ${C.BLACK};
  }
  .bg-red{
    background: ${C.RED};
  }

  // STORETWO1
  .bg-storeTwo {
    background: ${C.STORETWO1};
  }
  // STORETHREE1
  .bg-storeThree {
    background: ${C.STORETHREE1};
  }
  // STOREFOUR1
  .bg-storeFour {
    background: ${C.STOREFOUR1};
  }

  .bg-red-outlined{
    background: ${C.WHITE};
    border: 1px solid ${C.RED};
    transition: all 0.2s ease-in-out;

    &:hover {
      background: ${C.RED};
      color: ${C.WHITE};
    }
  }

  /* TEXT COLORS */
  .tx-white{
    color: ${C.WHITE};
  }

  .tx-blue{
    color: ${C.BLUE};
  }

  .tx-yellow{
    color: ${C.YELLOW};
  }

  .tx-darkgrey{
    color: ${C.DARK_GREY};
  }

  .tx-black{
    color: ${C.BLACK};
  }

  .tx-red{
    color: red;
  }

  /* BORDER COLORS */
  .border-1px-darkgrey{
    border: 1px solid ${C.DARK_GREY}
  }

  .border-1px-lightgrey{
    border: 1px solid ${C.LIGHT_GREY}
  }

  .border-bottom-1px-lightgrey{
    border-bottom: 1px solid ${C.LIGHT_GREY}
  }

  .border-error-1px-red{
    border: 1px solid red;
  }

  /* BUTTON GLOBAL */
  .btn-global{
    width: 100%;
    height: 34px;
    text-align: center;
    border-radius: 5px;
    background: rgb(245,245,245);
    background: linear-gradient(180deg, rgba(245,245,245,1) 0%, rgba(237,237,237,1) 100%);
    border: 1px solid #E5E5E5;
    font-size: 14px;
    line-height: 16px;
    color: ${C.DARK_GREY};
  }

  /* MARGIN */
  /* MARGIN TOP */
  .mtn-6px{
    margin-top: -6px;
  }
  .mt-2px{
    margin-top: 0.125rem;
  }

  .mt-6px{
    margin-top: 0.375rem;
  }

  .mt-10px{
    margin-top: 0.625rem;
  }

  .mt-16px{
    margin-top: 1rem;
  }

  .mt-40px {
    margin-top: 2.5rem;
  }

  .mt-45px {
    margin-top: 2.8125rem;
  }

  .mt-85px {
    margin-top: 5.3125rem;
  }

  .mt-125px {
    margin-top: 7.813rem;
  }

  /* MARGIN LEFT */
  .ml-5px{
    margin-left: 0.3125rem;
  }
  .ml-16px{
    margin-left: 1rem;
  }

  /* MARGIN RIGHT */
  .mr-5px{
    margin-right: 0.3125rem;
  }

  /* MARGIN BOTTOM */
  .mb-4px{
    margin-bottom: 0.25rem;
  }

  .mb-5px{
    margin-bottom: 0.3125rem;
  }

  .mb-6px{
    margin-bottom: 0.375rem;
  }
  
  .mb-7px{
    margin-bottom: 0.4375rem;
  }
  
  .mb-8px{
    margin-bottom: 0.5rem;
  }

  .mb-10px{
    margin-bottom: 0.625rem;
  }

  .mb-11px{
    margin-bottom: 0.6875rem;
  }

  .mb-12px{
    margin-bottom: 0.75rem;
  }

  .mb-13px{
    margin-bottom: 0.8125rem;
  }

  .mb-14px{
    margin-bottom: 0.875rem;
  }

  .mb-15px{
    margin-bottom: 0.9375rem;
  }

  .mb-16px{
    margin-bottom: 1rem;
  }

  .mb-17px{
    margin-bottom: 1.0625rem;
  }

  .mb-18px{
    margin-bottom: 1.125rem;
  }

  .mb-20px{
    margin-bottom: 1.25rem;
  }

  .mb-21px{
    margin-bottom: 1.3125rem;
  }

  /* PADDING */
  .p-11{
    padding: 11px;
  }

  .pt-9px{
    padding-top: 9px;
  }

  .pr-0{
    padding-right: 0;
  }

  .pr-48px{
    padding-right: 48px;
  }

  .pl-0{
    padding-left: 0;
  }

  .pl-2-5px{
    padding-left: 2.5px;
  }
  .pr-2-5px{
    padding-right: 2.5px;
  }

  .pl-4-5px{
    padding-left: 4.5px;
  }
  .pr-4-5px{
    padding-right: 4.5px;
  }

  /* WIDTH */
  .w-100{
    width: 100%;
  }

  /* HEIGHT */
  .h-30px{
    height: 30px;
  }

  .h-50px{
    height: 50px;
  }

  .h-52px{
    height: 52px;
  }

  .h-54px{
    height: 54px;
  }

  .h-61px{
    height: 61px;
  }

  .h-70px{
    height: 70px;
  }

  .h-75vh{
    height: 75vh;
  }

  .h-80vh{
    height: 80vh;
  }

  /* BORDER RADIUS */
  .br-4px{
    border-radius: 4px;
  }

  .br-8px{
    border-radius: 8px;
  }

  .br-10px{
    border-radius: 10px;
  }

  /* POSITION */
  .p-relative{
    position: relative;
  }

  .p-absolute{
    position: absolute;
  }

  .top-8px{
    top: 8px;
  }

  .left-8px{
    left: 8px;
  }

  .z-ind1{
    z-index: 1;
  }

  /* OUTLINE */
  .out-0{
    outline: none;
  }

`;

export default LibsStyle;
