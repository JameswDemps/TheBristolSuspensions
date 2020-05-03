import React from "react";

import SpotifyPlayer from "react-spotify-player";

export const Spotify = () => {
  const size = {
    width: "100%",
    height: 300,
  };
  const view = "list"; // or 'coverart'
  const theme = "black"; // or 'white'
  return (
    <SpotifyPlayer
      uri="spotify:album:6du4cm2ZrU0IiEfRysssWC"
      size={size}
      view={view}
      theme={theme}
    />
  );
};

export default Spotify;
