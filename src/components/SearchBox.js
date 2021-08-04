import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { themeVars } from "./GlobalStyles";
import fetchAndSet from "../fetchAndSet";
import { AppContext } from "./AppProvider";

const SearchBox = ({}) => {
  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState(null);
  const { setChannels } = useContext(AppContext);

  const handleSerachTermChange = (event) => {
    setSearchTerm(() => event.target.value);
  };

  const handleSerach = (event) => {
    if (!searchTerm) {
      return;
    }
    fetchAndSet({
      url: `search/channels?query=${searchTerm}'`,
      setter: setChannels,
    });
    // history.push("/results");
  };

  return (
    <Div>
      <FaSearch className="search-icon" />
      <input type="text" placeholder="S!" onChange={handleSerachTermChange} />
      <button
        onClick={handleSerach}
        className="search-button"
        disabled={!searchTerm}
      >
        GO
      </button>
    </Div>
  );
};

export default SearchBox;

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
    color: ${themeVars.accentColor};
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
