import React from 'react';
import { Box, Container, Cover, Title } from './styles';

type Props = {
  image: string;
  name: string;
};
function Artist({ image, name }: Props) {
  return (
    <Container>
      {image && (
        <Box>
          <Cover src={image} alt="Artist" />
        </Box>
      )}
      {name && <Title title="artist name">{name}</Title>}
    </Container>
  );
}

export default Artist;
