import styled from 'styled-components'

export const ResultsWrapper = styled.div`
  background-color: #363636;
  position: absolute;
  left: 0;
  top: calc(100% + 1px);
  width: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }
`
export const Result = styled.button`
  background-color: transparent;
  min-height: 56px;
  padding: 0 24px;
  color: #fff;
  font-size: 18px;
  width: 100%;
  text-align: left;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`
