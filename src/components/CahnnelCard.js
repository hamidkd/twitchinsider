import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { GrGamepad } from "react-icons/gr";

export default function ChannelCard({ channel }) {
  const { id, display_name, game_name, is_live, thumbnail_url, title } =
    channel;

  return (
    <Div>
      <Link className="wrapper" to={`/channel/${id}`}>
        <div className="avatar-wrapper">
          <img className="avatar" alt="thumbnail" src={thumbnail_url} />
          {is_live && <p className="live">LiVE</p>}
        </div>
        <h3>{display_name}</h3>
        <p className="title">{title}</p>
        {game_name && (
          <div className="games">
            <div>
              <GrGamepad />
              <span>Games</span>
            </div>
            <p>{game_name}</p>
          </div>
        )}
      </Link>
    </Div>
  );
}
const Div = styled.div`
  word-break: break-all;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    gap: 1rem;
  }

  .avatar-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .avatar {
    border-radius: 1000px;
    max-width: 60%;
    box-shadow: ${themeVars.boxShadow};
    margin-bottom: 1rem;
  }

  .live {
    top: 10%;
    left: 70%;
    position: absolute;
    font-size: 0.8em;
    font-weight: 900;
    background-color: ${themeVars.primaryColor};
    color: white;
    padding: 0.1rem;
    padding-inline: 0.5rem;
    border-radius: 10rem;
  }

  .title {
    font-weight: 700;
    color: dimgray;
  }

  .games {
    margin-top: auto;
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
