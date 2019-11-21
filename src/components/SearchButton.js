import React from "react";
import styled from "@emotion/styled";
import searchglass from "../assets/searchglass.svg";
import stop from "../assets/stop.svg";

const SearchClick = styled.button`
  border-radius: 25%;
  background-image: 
  width: 64px;
  flex-shrink: 0;
  background: transparent;
`;

const Icon = styled.img`
  height: 90%;
`;

export default function SearchButton({ active, onClick }) {
  return (
    <SearchClick onClick={onClick}>
      <Icon active={active} src={active ? stop : searchglass} />
    </SearchClick>
  );
}
