import styled from 'styled-components'

export const SearchWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  border-radius: 4px;
  align-items: flex-start;

  button {
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
