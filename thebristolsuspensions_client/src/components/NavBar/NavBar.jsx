import React from "react";

import "./css/NavBar.css";

export const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <div className="logo-homelink"></div>
        <button className="navbar-link active">HOME</button>
        <button className="navbar-link">ABOUT</button>
        <button className="navbar-link">MUSIC</button>
        <button className="navbar-link">VIDEOS</button>
        <button className="navbar-link">UPCOMING EVENTS</button>
        <button className="navbar-link">FRINGE</button>
        <button className="navbar-link">CONTACT</button>
      </div>
      <div className="Navspace" />
    </>
  );
};
