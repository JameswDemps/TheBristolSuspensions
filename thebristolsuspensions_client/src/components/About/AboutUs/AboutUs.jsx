import React from "react";

import "./css/about-us.css";
import Image from "react-image-webp";

import { strings } from "./strings";

export const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-banner">
        <div className="about-us-banner-overlay">
          <h1 className="about-us-header">{strings.ABOUT_US_HEADING}</h1>
        </div>
      </div>
      <div className="about-us-text-container">
        <div className="about-us-text">
          {strings.ABOUT_US_TEXT.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
