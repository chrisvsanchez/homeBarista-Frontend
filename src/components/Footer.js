import React from "react";
// import { Divider } from 'semantic-ui-react'
import { Image } from "semantic-ui-react";
import BaristaLogo from "./Images/Home_barista_logo_white.png";
const Footer = () => {
  return (
    <div className="footer">
      <Image centered size={"tiny"} src={BaristaLogo}></Image>

      <span>©HomeBarista 2020</span>
    </div>
  );
};

export default Footer;
