import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "./AppProvider";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import Loading from "./Loading";

export default function HomePage() {
  const { channels, isLoading, setIsLoading } = useContext(AppContext);

  useEffect(() => {
    if (channels) {
      setIsLoading(false);
    }
  }, [channels]);
  return (
    <Div>
      <SearchBox />
      {isLoading && <Loading />}
      {channels && <SearchResults />}
    </Div>
  );
}
const Div = styled.div`
  height: 100%;
  width: 100%;
  background: ghostwhite;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding-block: 5rem;
  padding-inline: 1rem;
`;
