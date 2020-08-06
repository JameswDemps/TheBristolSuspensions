import React from "react";

import "./css/about-us.css";

import { strings } from "./strings";

export const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-banner about-us-banner-heading-background">
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
      <div className="about-us-banner about-us-banner-awards-background">
        <div className="about-us-banner-overlay">
          <h1 className="about-us-header">{strings.ABOUT_US_AWARDS_HEADING}</h1>
        </div>
      </div>
      <div className="about-us-text-container">
        <div className="about-us-text">
          {strings.ABOUT_US_AWARDS.map((item) => (
            <p>
              <span>{`${item.EMOJI} `}</span>
              <strong>{item.NAME}</strong>
              <span>{` - ${item.CONTEXT}`}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="wrapper">
        <div className="snow-wrapper">
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. .... ....
              Donec in justo eu ligula semper consequat sed a risus.
            </p>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. .... ....
              Donec in justo eu ligula semper consequat sed a risus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
