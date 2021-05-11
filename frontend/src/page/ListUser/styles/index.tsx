import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;

export const User = styled.article`
  flex: 0 0 200px;
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);

  img {
    max-width: 100%;
  }

  div {
    padding: 0 20px 20px;
    button {
      background: gray;
      border: 0;
      color: white;
      padding: 10px;
      width: 100%;
    }
  }

  header, footer, article, nav, aside {
    padding: 1em;
  }
  header, footer {
    background: yellowgreen;
    height: 20vh;
  }
`;