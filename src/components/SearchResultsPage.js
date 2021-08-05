import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./AppProvider";
import ChannelCard from "./CahnnelCard";

export default function SearchResultsPage() {
  const { channels } = useContext(AppContext);

  return (
    <Div>
      {channels &&
        channels.map((channel, index) => {
          return <ChannelCard key={"channelCard-" + index} channel={channel} />;
        })}
    </Div>
  );
}
const Div = styled.div`

  padding-block: 3rem;
  padding-inline: 1.5rem;
  background: ghostwhite;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
`;
