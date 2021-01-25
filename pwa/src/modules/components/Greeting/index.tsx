import React from 'react';
import { FaHandPeace } from 'react-icons/fa';
import { Container } from './styles';

interface Props {
  text: string;
}

const Greeting: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <FaHandPeace size="1.6rem" />
      <span>
        {text}
      </span>
    </Container>
  );
}

export default Greeting;