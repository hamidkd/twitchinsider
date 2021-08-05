import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import fetchAndSet from "../fetchAndSet";
import Loading from "./Loading";

export default function ChannelPage() {
  const { id } = useParams();
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const url = `/channels?broadcaster_id=${id}`;
    fetchAndSet({ url, setter: setChannel });
  }, [id]);

  return (
    <Div>
      {!channel ? (
        <Loading />
      ) : (
        <>
          <h2>{channel[0].broadcaster_name}</h2>
          {channel[0].title && <p>Game: {channel[0].title}</p>}
          <p>Language: {channel[0].broadcaster_language}</p>
          {channel[0].game_name && <p>Game: {channel[0].game_name}</p>}
        </>
      )}
    </Div>
  );
}
const Div = styled.div`
  height: 100%;
  padding: 1.5rem;
  background: ghostwhite;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
