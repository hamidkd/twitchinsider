import React, { useState, useContext } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { themeVars } from "./GlobalStyles";
import fetchAndSet from "../fetchAndSet";
import { AppContext } from "./AppProvider";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const { setChannels, setIsLoading } = useContext(AppContext);

  const handleSerachTermChange = (event) => {
    setSearchTerm(() => event.target.value);
  };

  const handleSerach = (event) => {
    if (!searchTerm) {
      return;
    }
    setIsLoading(true);
    setChannels(null);
    fetchAndSet({
      url: `/search/channels?query=${searchTerm}'`,
      setter: setChannels,
    });
  };

  return (
    <Div>
      <div className="wrapper">
        <FaSearch className="search-icon" />
        <input
          className="input"
          type="text"
          placeholder="Search among 3 milions channels in twitch!"
          onChange={handleSerachTermChange}
        />
      </div>
      <button
        tabIndex="0"
        onClick={handleSerach}
        className="search-button"
        disabled={!searchTerm}
      >
        Search
      </button>
    </Div>
  );
};

export default SearchBox;

const Div = styled.div`
  max-width: 60ch;
  width: 100%;
  padding-inline: 0.7rem;
  padding-inline-start: 1.5rem;
  padding-block: 0.7rem;
  border-radius: 500px;
  box-shadow: ${themeVars.boxShadow};
  overflow: hidden;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  &:focus-within {
    box-shadow: ${themeVars.boxShadowHover};
  }
  .wrapper {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
  }
  .search-icon {
    color: ${themeVars.accentColor};
  }
  .input {
    width: 100%;
    padding-inline: 0.5rem;
    border: none;
    outline: none;
  }
  .search-button {
    flex: 0;
    font-size: 1.1em;
    font-family: ${themeVars.contentFont};
    background-color: ${themeVars.accent2Color};
    color: ${themeVars.accent3Color};
    padding-block: 0.1rem;
    padding-inline: 1.5rem;

    &:hover {
      box-shadow: ${themeVars.boxShadow};
      background-color: ${themeVars.accent3Color};
      color: ${themeVars.primaryColor};
    }
    &:focus {
      outline: 3px solid ${themeVars.accent2Color};
    }
  }
`;
