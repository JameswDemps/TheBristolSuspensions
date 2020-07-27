import React from "react";

import { NavBarDropdown } from "./NavBarDropdown";
import "./css/NavBar.css";

export const NavBar = () => {
  const aboutList = [
    {
      index: 0,
      title: "ABOUT US",
      selected: false,
    },
    {
      index: 1,
      title: "MEMBERS",
      selected: false,
    },
    {
      index: 2,
      title: "ALUMNI",
      selected: false,
    },
  ];

  return (
    <>
      <div className="NavBar">
        <div className="logo-homelink"></div>
        <a href="/">
          <button className="navbar-link active">HOME</button>
        </a>
        <NavBarDropdown />
        <a href="https://open.spotify.com/artist/29J0P5akUKvNuV3KsPDmLZ">
          <button className="navbar-link">MUSIC</button>
        </a>
        <a href="https://www.youtube.com/channel/UC64I7Ne7m-ddyCvNxcdfwKw">
          <button className="navbar-link">VIDEOS</button>
        </a>
        <a href="https://www.facebook.com/thebristolsuspensions/events/">
          <button className="navbar-link">UPCOMING EVENTS</button>
        </a>
        <a href="/fringe">
          <button className="navbar-link">FRINGE</button>
        </a>
        <a href="/contact">
          <button className="navbar-link">CONTACT</button>
        </a>
      </div>
      <div className="Navspace" />
    </>
  );
};
