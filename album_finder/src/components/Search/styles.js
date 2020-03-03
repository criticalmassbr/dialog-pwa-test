import styled from "styled-components";
import { MdSearch } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;

  background: white;
  padding: 20px 40px;
  border-radius: 5px;
`;

export const SearchIcon = styled(MdSearch).attrs({
  size: 30,
  color: "#B0B0B0"
})`
  position: absolute;
  margin-left: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  color: black;
  background: #edf1f2;
  padding: 20px 60px;
  border: 0;
  border-radius: 10px;
  font-size: 18px;
`;
