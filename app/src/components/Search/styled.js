import styled from 'styled-components'

export const SearchWrapper = styled.div`
  background-color: #363636;
  display: flex;
  border-radius: 4px;
  align-items: flex-start;
  position: relative;
  z-index: 10;

  button[type='submit'] {
    height: 56px;
    flex: 0 0 56px;
    background: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;

    .icon {
      width: 24px;

      svg {
        width: 24px;
      }
    }
  }
`
