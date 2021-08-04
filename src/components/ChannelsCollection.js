import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./AppProvider";

export default function ChannelsCollection({}) {
  const { channels } = useContext(AppContext);

  return (
    <Div>
      {channels && channels.map((channel) => {
        return <div>This is a channelCard.</div>;
      })}
    </Div>
  );
}
const Div = styled.div`
  padding: 1.5rem;
  border-radius: 1.5rem;
  background: ghostwhite;
  border: 1px solid gray;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
