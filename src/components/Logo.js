import React from "react";
import styled from "@emotion/styled";

const Title = styled.h1`
  margin: 0;
  font-size: 1.8em;
  color: black;
  text-shadow: 1px 1px 1px darkgrey;
  padding: 5px;
  letter-spacing: 2px;
`;

export default function Logo({ text }) {
  return <Title> {text}</Title>;
}
