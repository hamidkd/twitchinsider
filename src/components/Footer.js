import React from "react";
import Styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Footer = () => {
  return (
    <StyledFooter>
      <p>Created with ❤️ by Hamid Keshmiri</p>
      <p>
        See the source in{" "}
        <a href="https://github.com/hamidkd/kidcademy-frontend">GitHub</a>
      </p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = Styled.footer`
flex: 0;
padding-top: 1rem;
background: ${themeVars.darkColor};

  padding-inline: 2rem;
  padding-block: 3rem;
  display:flex;
  flex-direction: column;
  align-items: center;
  color: white;

`;
