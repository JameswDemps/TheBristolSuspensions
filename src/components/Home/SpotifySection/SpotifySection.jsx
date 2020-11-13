import React from "react";

import Image from "react-image-webp";

import "./css/spotify-section.css";
import { Spotify } from "../../Spotify";

export const SpotifySection = () => {
  return (
    <div className="spotify-section-container">
      <div className="spotify-section-container-contents">
        <div className="social-media-spotify-text-container heading-top">
          Listen to our latest music on Spotify
        </div>
        <div className="spotify-section-spotify-container">
          <Spotify />
        </div>
        <div className="social-media-spotify-follow-container">
          <div className="social-media-spotify-text-container heading-center">
            Listen to our latest music on Spotify
          </div>
          <div className="frame_container_item">
            <iframe
              src="https://open.spotify.com/follow/1/?uri=spotify:artist:29J0P5akUKvNuV3KsPDmLZ&size=detail&theme=light"
              width="240"
              height="56"
              scrolling="no"
              frameborder="0"
              style={{ border: "none", overflow: "hidden" }}
              allowtransparency="true"
            ></iframe>
          </div>
        </div>
        <div className="spotify-section-album-image-container">
          <Image
            // className="logo"
            // src={require('./Images/homepage-banner.png')}
            webp={require("../../Images/Testament-Final.png")}
            // style={{ width: "33%", height: "33%" }}
            width="300px"
            height="300px"
          />
        </div>
      </div>
    </div>
  );
};

export default SpotifySection;
