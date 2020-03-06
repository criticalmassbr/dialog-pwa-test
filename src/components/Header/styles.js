import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 576px) {
    padding: 0px;
  }
`;

export const HeaderTitleContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 42px;
  width: 100%;

  @media (max-width: 576px) {
    margin-bottom: 16px;
    flex-direction: column;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 48px;
  transition: all .3s;

  @media (max-width: 576px) {
    font-size: 34px;
  }
`;

export const HeaderLogo = styled.img`
  width: 100px;
  margin-right: 16px;
  transition: all .3s;

  @media (max-width: 576px) {
    margin: 0px;
  }
`;

export const HeaderSearchContent = styled.div`
  display: flex;
  position: relative;
  border-radius: 4px;
  width: 500px;
  background-color: #fff;
  overflow: hidden;
  border: 1px solid #CFCACA;
  width: 100%;
  box-sizing: border-box;
  max-width: 600px;
`;

export const HeaderSearch = styled.input`
  font-size: 24px;
  border: none;
  padding: 24px 16px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  outline: none;
`;

export const HeaderSearchButton = styled.button`
    border-radius: 5px;
    padding: 16px;
    margin: 8px;
    color: #FFF;
    background-color: #1ED760;
    font-size: 24px;
    cursor: pointer;
    user-select: none;
    border: none;
    transition: all .2s;
    outline: none;

    &:hover {
      background-color: #18ac4d;
    }

    &:active {
      background-color: #0c5626;
    }
`;