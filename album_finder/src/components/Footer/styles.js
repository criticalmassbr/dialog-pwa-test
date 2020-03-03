import styled from "styled-components";
import { MdFavorite } from "react-icons/md";

export const Container = styled.div`
  position: relative;

  padding: 20px;

  display: flex;
  align-items: center;

  background: #597480;
`;

export const Icon = styled(MdFavorite).attrs({
  size: 25,
  color: "red"
})`
  margin: 0px 4px;
`;
