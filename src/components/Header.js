import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";
import Search from "./Search";
import SearchButton from "./SearchButton";

const AppBar = styled.header`
  background: ${props => (props.active ? "white" : "#3accaf")};
  height: 60px;
  display: flex;
  border: 0;
  box-shadow: 0px 15px 28px -4px rgba(0, 0, 0, 0.75);
  justify-content: space-between;
`;

export default function Header() {
  const [showSearch, setShowSearch] = React.useState(false);

  return (
    <AppBar active={showSearch}>
      {!showSearch && <Logo text="MovieLings" />}
      {showSearch && <Search />}
      <SearchButton
        active={showSearch}
        onClick={() => setShowSearch(!showSearch)}
      />
    </AppBar>
  );
}
