import React from "react";
import { Card, Cover, Title } from "./styles";
import { IAlbum } from "./types";

function Album({ image, name }: IAlbum) {
  return (
    <Card title={name}>
      <Cover src={image} alt="album cover" />
      <Title title="album name">{name}</Title>
    </Card>
  );
}

export default Album;
