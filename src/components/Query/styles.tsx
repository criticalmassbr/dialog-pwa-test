import { LoaderCircle } from '@styled-icons/boxicons-regular/LoaderCircle';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled(LoaderCircle).attrs(props => ({
  size: props.size || '2em',
}))`
  animation: ${rotate} 2s linear infinite;
  margin: 0 auto;
  padding: 1em 0;
`;

export const Text = styled.p`
  padding: 1em 0;
  text-align: center;
`;
