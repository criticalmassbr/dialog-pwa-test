import { Search } from '@styled-icons/boxicons-regular/Search';
import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  line-height: 1em;
  position: relative;
`;

export const SearchIcon = styled(Search).attrs(attr => ({
  size: attr.size || '1.5em',
}))`
  position: absolute;
  top: 0.7em;
  left: 0.9em;
  width: 1.25em;
`;

export const Input = styled.input`
  border-radius: 0.75em;
  box-shadow: 0 0 3px #ccc, 0 10px 15px #ebebeb inset;
  margin: 1em;
  padding: 0.25em 1em;
  text-indent: 1em;
  width: 50vw;
  font-size: 0.75em;
`;
