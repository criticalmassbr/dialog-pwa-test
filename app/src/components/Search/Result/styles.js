import styled from 'styled-components';
import PerfectScroll from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: absolute;
  background-color: pink;
  width: 50%;
  margin-top: 2px;
  z-index: 1;
  border-radius: 5px;
`;

export const Scroll = styled(PerfectScroll)`
  max-height: 260px;
  padding: 5px 15px;
`;
