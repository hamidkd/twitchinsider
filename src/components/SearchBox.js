import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { themeVars } from "./GlobalStyles";
export default function SearchBox({}) {
  return (
    <Div>
      <FaSearch className='search-icon'/>
      <input
        type="text"
        placeholder="S!"
      />
      <button className='search-button'>GO</button>
    </Div>
  );
}
const Div = styled.div`
  padding-inline: 0.7rem;
  padding-inline-start: 1.5rem;
  padding-block: 0.7rem;
  border-radius: 500px;
  box-shadow: ${themeVars.boxShadow};
  overflow: hidden;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:focus-within {
    box-shadow: ${themeVars.boxShadowHover};
  }
  .search-icon {
    color: ${themeVars.accentColor}
  }
  input {
    display: block;
    padding-inline: 0.5rem;
    border: none;
    outline: none;
  }
  .search-button {
      font-size: 1.3em;
      font-family: ${themeVars.contentFont};
      background-color: ${themeVars.accentColor};
      padding-block: 0.1rem;
      padding-inline: 2rem;
  }
`;
