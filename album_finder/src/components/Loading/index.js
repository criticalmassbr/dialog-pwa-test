import React from "react";

import { Container } from "./styles";

import { BarLoader } from "react-spinners";

export default function Loading() {
  return (
    <Container>
      <BarLoader width={300} height={10} color={"#597480"} />
    </Container>
  );
}
