import React from "react";

import "./index.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <p className="footer-text">CRA Template &copy; {currentYear}</p>
    </div>
  );
};

export default Footer;
