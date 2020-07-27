import React from "react";

import "./css/about-us.css";
import Image from "react-image-webp";
import { strings } from "../strings";

export const AboutUs = () => {
  return (
    <>
      <div className="about-us-banner-image" image="./location">
        <div className="about-us-container">
          <div className="about-us-text-container">
            <div className="about-us-text">
              <h1 className="about-us-text-header">{strings.ABOUT_US_TITLE}</h1>
              <p className="about-us-paragraph">
                {strings.ABOUT_US_DESCRIPTION}
              </p>
            </div>
          </div>
          <a
            className="about-us-button-container"
            href="https://www.youtube.com/channel/UC64I7Ne7m-ddyCvNxcdfwKw"
          >
            <button className="about-us-latest-video">
              Watch our latest live video!
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
