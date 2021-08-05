import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./AppProvider";
import ChannelCard from "./CahnnelCard";

export default function SearchResults() {
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
width: 100%;
max-width: 1400px;
  padding-inline: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;
