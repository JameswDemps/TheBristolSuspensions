import React from "react";

import "./css/fringe.css";
import Image from "react-image-webp";

import { strings } from "./strings";

export const Fringe = () => {
  return (
    <div className="fringe">
      <div className="fringe-content">
        <div className="fringe-text">
          <h1>{strings.FRINGE_TITLE}</h1>
          <div className="fringe-paragraph-container">
            <p className="fringe-paragraph">{strings.FRINGE_PARAGRAPH}</p>
          </div>
          <a
            className="fringe-funder-link"
            href="https://www.fringefunder.com/campaign/431/aca-rrested-the-bristol-suspensions"
          >
            <button className="fringe-funder-button">
              Help us get to fringe by supporting our fringe funder!
            </button>
          </a>
        </div>
        <div className="fringe-poster">
          <Image
            className="fringe-poster-image"
            // src={require('./Images/homepage-banner.png')}
            webp={require("../Images/poster.webp")}
          />
        </div>
      </div>
    </div>
  );
};
