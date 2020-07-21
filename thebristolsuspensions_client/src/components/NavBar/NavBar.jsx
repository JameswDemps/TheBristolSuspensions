import React from "react";

import NavBarDropdown from "./NavBarDropdown";
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
        <button className="navbar-link active">HOME</button>
        <NavBarDropdown
          className="navbar-link"
          placeholder="ABOUT"
          value={3}
          // onChange={(v) => setVegetable(v)}
          options={["Tomato", "Cucumber", "Potato"]}
        ></NavBarDropdown>
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
