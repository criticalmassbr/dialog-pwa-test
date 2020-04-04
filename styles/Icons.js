import styled from 'styled-components';

const Icon = styled.i`
  font-family: 'labiicons' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const ArrowLeft = styled(Icon)`
  &:before {
    content: "\\e902";
  }
`;
