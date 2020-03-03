import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: -1;

  top: -100px;

  -webkit-transform: skewY(-5deg);
  -moz-transform: skewY(-5deg);
  -ms-transform: skewY(-5deg);
  -o-transform: skewY(-5deg);
  transform: skewY(-5deg);

  width: 100%;
  height: 50vh;

  background-image: url("https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
