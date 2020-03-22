import React from "react";

import { FooterContainer, FooterText } from "./styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>CRA Template &copy; {currentYear}</FooterText>
    </FooterContainer>
  );
};

export default Footer;
