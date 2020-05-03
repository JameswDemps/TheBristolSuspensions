import React from "react";

import Image from "react-image-webp";

import "./css/SpotifySection.css";
import { Spotify } from "../../Spotify";

export const SpotifySection = () => {
  return (
    <div className="Spotify-Section-Container">
      <Spotify />
      <iframe
        src="https://open.spotify.com/follow/1/?uri=spotify:artist:29J0P5akUKvNuV3KsPDmLZ&size=detail&theme=light"
        width="240"
        height="56"
        scrolling="no"
        frameborder="0"
        // style={border="none"; overflow="hidden";}
        allowtransparency="true"
      ></iframe>
      <Image
        // className="logo"
        // src={require('./Images/homepage-banner.png')}
        webp={require("../../Images/Testament-Final.webp")}
      />
    </div>
  );
};

export default SpotifySection;
