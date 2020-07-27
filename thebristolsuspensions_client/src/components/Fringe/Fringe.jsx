import React from "react";

import "./css/fringe.css";
import Image from "react-image-webp";

export const Fringe = () => {
  return (
    <div className="fringe">
      <div className="fringe-content">
        <div className="fringe-text">
          <h1>
            The Bristol Suspensions are returning to The Fringe for a fifth
            consecutive year!
          </h1>
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
