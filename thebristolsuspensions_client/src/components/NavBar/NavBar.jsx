import React from "react";

import "./css/NavBar.css";

export const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <div className="logo-homelink"></div>
        <div className="nav-link active">HOME</div>
        <div className="nav-link">ABOUT</div>
        <div className="nav-link">MUSIC</div>
        <div className="nav-link">VIDEOS</div>
        <div className="nav-link">UPCOMING EVENTS</div>
        <div className="nav-link">FRINGE</div>
        <div className="nav-link">CONTACT</div>
      </div>
      <div className="Navspace" />
    </>
  );
};

// export default NavBar;
