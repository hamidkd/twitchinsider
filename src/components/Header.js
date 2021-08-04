import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

import { themeVars } from "./GlobalStyles";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Link to="/">
          <h1 className="site-title">
            <span>twitch</span>Insider
          </h1>
        </Link>
      </StyledHeader>
    </>
  );
};

export default Header;

const StyledHeader = Styled.header`
flex: 0;

display: flex;
justify-content: center;
align-items: center;
background: ${themeVars.primaryColor};
/* padding: 1rem; */
min-height: 6rem;
padding-inline: 1rem ;
font-weight: 900;

.site-title {
  font-weight: 900;
  font-size: 1.5em;
  span {
    color: white;
  }
}

nav {
    padding: 1rem;
    color: white;
    display: flex;
    justify-content: center;
align-items: center;
    gap: 2rem;
     
     a {
       color: white;
       text-decoration: none;
     }

     @media only screen and (max-width: 800px) {
      .desktop-only {
        display: none;
      }
     }
}
`;
