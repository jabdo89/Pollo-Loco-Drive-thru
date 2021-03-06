import React from "react";
import moment from "moment";
import { FooterContainer } from "./elements";

const Footer = () => {
  return (
    <FooterContainer style={{ textAlign: "center" }}>
      <div id="copyright">{` Abdo Technology CopyrightÂ© ${moment().format(
        "YYYY"
      )}`}</div>
    </FooterContainer>
  );
};

export default Footer;
