import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function ChannelCard({ channel }) {
  const {
    broadcaster_login,
    display_name,
    game_name,
    is_live,
    thumbnail_url,
    title,
  } = channel;

  return (
    <Div>
      <Link className="wrapper" to={`/channel/${broadcaster_login}`}>
        <img className="avatar" alt="thumbnail" src={thumbnail_url} />
        <h3>{display_name}</h3>
        <p>{title}</p>
        <p>Game: {game_name}</p>
        {is_live && <p>LiVE NOW</p>}
      </Link>
    </Div>
  );
}
const Div = styled.div`
  word-break: break-all;
  padding: 1rem;
  border-radius: 1.5rem;
  background: ghostwhite;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .avatar {
    border-radius: 1000px;
    max-width: 60%;
  }
`;
