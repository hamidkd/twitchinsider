import React, { useContext, useEffect, useState } from "react";
import { GrGamepad } from "react-icons/gr";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import fetchAndSet from "../fetchAndSet";
import { AppContext } from "./AppProvider";
import { themeVars } from "./GlobalStyles";
import Loading from "./Loading";

export default function ChannelPage() {
  const { id } = useParams();
  const [channel, setChannel] = useState(null);
  const { channels } = useContext(AppContext);

  const [thumbnail_url, setThumbnail_url] = useState(null);
  useEffect(() => {
    const url = `/channels?broadcaster_id=${id}`;
    fetchAndSet({ url, setter: setChannel });
    if (channels) {
      setThumbnail_url(channels.find((ch) => ch.id === id).thumbnail_url);
    }
  }, [id]);

  return (
    <Div>
      {!channel ? (
        <Loading />
      ) : (
        <div>
          <div className="wrapper">
            {thumbnail_url && (
              <img className="avatar" alt="thumbnail" src={thumbnail_url} />
            )}
            <h2 className="name"> {channel[0].broadcaster_name}</h2>
            {channel[0].title && <p className="title">{channel[0].title}</p>}
            <p>Language: {channel[0].broadcaster_language}</p>
            {channel[0].game_name && (
              <div className="games">
                <div>
                  <GrGamepad />
                  <span>Games</span>
                </div>
                <p>{channel[0].game_name}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </Div>
  );
}
const Div = styled.div`
  height: 100%;

  padding: 1.5rem;
  padding-top: 3rem;
  background: ghostwhite;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .wrapper {
    margin-block: 7rem;
    padding: 3rem;
    border-radius: 2rem;
    background-color: ${themeVars.lightGrayColor};
    box-shadow: ${themeVars.boxShadow};
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 1rem;
  }

  .avatar {
    border: 0.5rem solid ${themeVars.accent2Color};
    box-shadow: ${themeVars.boxShadow};
    border-radius: 1000px;
    max-width: 15rem;
    margin-top: -7rem;
  }

  .name {
    font-size: 4em;
    margin-block: 1rem;
    padding: 0;
  }

  .title {
    font-size: 1.3em;
    color: black;
    opacity: 0.9;
  }

  .games {
    margin-top: auto;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    div {
      margin-top: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      opacity: 0.6;
    }
    p {
      color: ${themeVars.accent2Color};
    }
  }
`;
