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
        <a href="#">
          <button className="navbar-link active">HOME</button>
        </a>
        {/* <NavBarDropdown
          className="navbar-link"
          placeholder="ABOUT"
          value={3}
          // onChange={(v) => setVegetable(v)}
          options={["Tomato", "Cucumber", "Potato"]}
        ></NavBarDropdown> */}
        <NavBarDropdown />
        <a href="#music">
          <button className="navbar-link">MUSIC</button>
        </a>
        <a href="#videos">
          <button className="navbar-link">VIDEOS</button>
        </a>
        <a href="#upcoming-events">
          <button className="navbar-link">UPCOMING EVENTS</button>
        </a>
        <a href="#fringe">
          <button className="navbar-link">FRINGE</button>
        </a>
        <a href="#contact">
          <button className="navbar-link">CONTACT</button>
        </a>
      </div>
      <div className="Navspace" />
    </>
  );
};
