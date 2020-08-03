import React from "react";

import "./css/about-us.css";
import Image from "react-image-webp";
import { strings } from "../strings";

export const AboutUs = () => {
  return (
    <>
      <div className="home-about-us-banner-image" image="./location">
        <div className="home-about-us-container">
          <div className="home-home-about-us-text-container">
            <div className="home-about-us-text">
              <h1 className="home-about-us-text-header">
                {strings.ABOUT_US_TITLE}
              </h1>
              <p className="home-about-us-paragraph">
                {strings.ABOUT_US_DESCRIPTION}
              </p>
            </div>
          </div>
          <a
            className="home-about-us-button-container"
            href="https://www.youtube.com/channel/UC64I7Ne7m-ddyCvNxcdfwKw"
          >
            <button className="home-about-us-latest-video">
              Watch our latest live video!
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
