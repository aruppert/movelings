import React from "react";
import styled from "@emotion/styled";

const SearchInput = styled.input`
  background: white;
  border: 30px;
  flex-grow: 1;
  height: 100%,
  boder: 0;
  font-size: 1rem;
  background: transparent;
  &::placeholder {
    color: #262626;
  }
  
`;

export default function Search() {
  return <SearchInput autoFocus type="text" placeholder="Search here" />;
}
