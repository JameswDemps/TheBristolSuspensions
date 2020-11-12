import React from "react";

import "./css/homepage-banner.css";
import Image from "react-image-webp";

export const Banner = () => {
  return (
    <div className="homepage-banner">
      <Image
        className="logo"
        // src={require('./Images/homepage-banner.png')}
        webp={require('@Url.Content("../Images/Logo.webp")'}
      />
      {/*<Image*/}
      {/*    className='homepage-banner-image'*/}
      {/*    // src={require('./Images/homepage-banner.png')}*/}
      {/*    webp={require('../Images/homepage-banner.webp')}*/}
      {/*/>*/}
      <div className="homepage-banner-image"></div>
    </div>
  );
};
