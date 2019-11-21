import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";

const AppBar = styled.header`
  background: #3accaf;
  height: 60px;
`;

export default function Header() {
  return (
    <AppBar>
      <Logo text="Mov.Lings" />
      Movies, Search, IConButton
    </AppBar>
  );
}
