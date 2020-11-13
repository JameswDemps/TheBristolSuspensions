import React from "react";

import "./css/homepage-banner.css";
import Image from "react-image-webp";

export const Banner = () => {
  return (
    <div className="homepage-banner">
      <Image
        className="logo"
        // src={require("../Images/homepage-about-us.jpg")}
        webp={require("../Images/Logo.png")}
      />
      {/*<Image*/}
      {/*    className='homepage-banner-image'*/}
      {/*    // src={require('./Images/homepage-banner.png')}*/}
      {/*    webp={require('../Images/homepage-banner.png')}*/}
      {/*/>*/}
      <div className="homepage-banner-image"></div>
    </div>
  );
};
