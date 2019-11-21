import React from "react";
import styled from "@emotion/styled";

const SearchInput = styled.input`
  background: white;
  border: 30px;
`;

export default function Search() {
  return (
    <SearchInput>
      <input type="text" placeholder="Search here" />
    </SearchInput>
  );
}
