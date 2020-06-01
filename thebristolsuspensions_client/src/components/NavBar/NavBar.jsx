import React from "react";

import "./css/NavBar.css";

export const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <div className="logo-homelink"></div>
        <div className="navbar-link active">HOME</div>
        <div className="navbar-link">ABOUT</div>
        <div className="navbar-link">MUSIC</div>
        <div className="navbar-link">VIDEOS</div>
        <div className="navbar-link">UPCOMING EVENTS</div>
        <div className="navbar-link">FRINGE</div>
        <div className="navbar-link">CONTACT</div>
      </div>
      <div className="Navspace" />
    </>
  );
};

// export default NavBar;
