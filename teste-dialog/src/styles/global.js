import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

 @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    font-family:Roboto;
  }
  body{
    background:#121212 no-repeat center top;
    -webkit-font-smoothing:antialiased;
  }
  body,input, button {
    font-size:14px Roboto, sans-serif;
  }
  #root{
    max-width:1020px;
    margin:0 auto;
    padding: 0 20px 50px;
  }
  button{
    cursor: pointer;
  }
`;
