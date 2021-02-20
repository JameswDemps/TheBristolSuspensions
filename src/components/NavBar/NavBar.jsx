import React, { useState } from "react";

import { NavBarDropdown } from "./NavBarDropdown";
import "./css/NavBar.css";

export const NavBar = () => {
  // const aboutList = [
  //   {
  //     index: 0,
  //     title: "ABOUT US",
  //     selected: false,
  //   },
  //   {
  //     index: 1,
  //     title: "MEMBERS",
  //     selected: false,
  //   },
  //   {
  //     index: 2,
  //     title: "ALUMNI",
  //     selected: false,
  //   },
  // ];

  const isMobile = () => window.innerWidth <= 650;

  const [isOpen, setIsOpen] = useState(!isMobile());

  // let isActive = isOpen ? " active" : " navbar-link-dropdown-inactive";

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (isMobile() == isOpen) {
      setIsOpen(!isMobile());
    }
  };

  window.addEventListener("resize", () => handleResize());

  return (
    <>
      <div className="nav-bar-mobile">
        <a href="/" className="nav-bar-mobile-item">
          <img src={require("../Images/LogoSticker.png")} />
        </a>
        <div className="nav-bar-mobile-item">
          <button className="burger-menu" onClick={() => toggleIsOpen()}>
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
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
      )}
      <div className="Navspace" />
    </>
  );
};
