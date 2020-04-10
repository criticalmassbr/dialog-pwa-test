import styled from "styled-components";
import * as C from "~/styles/Constants";

export const FormSearch = styled.form`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  height: 50px;
  background: #EEEEEE;
  padding: 10px 0;
  border: 1px solid ${C.LIGHT_GREY};
`;

export const InputSearch = styled.input`
  height: 100%;
  width: 100%;
  padding-left: 10px;
  color: #AAAAAA;
  background: #EEEEEE;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlagSearch = styled.div`
  padding-right: 10px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: url(/images/icons/search.svg) no-repeat center;
  background-size: 31px 22px;
`;

export const SuggestionsSearch = styled.ul`
  display: block;
  list-style: none;
  background: ${C.WHITE};
  border: 1px solid ${C.LIGHT_GREY};
  border-radius: 8px;
  margin-top: 10px;
  width: 100%;
  height: 230px;
  overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 1px 1px 1px ${C.LIGHT_GREY}; 
      border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${C.LIGHT_GREY}; 
      border-radius: 8px;
    }

    li {
      display: block;
      padding: 0 10px;
      max-width: 280px;
      font-size: 14px;
      font-weight: normal;
      line-height: 36px;
      color: ${C.DARK_GREY};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      span.firstWord {
        font-weight: bold;
      }

      &:focus,
      &:hover {
        background: ${C.GREEN};
      }
    }
`;
