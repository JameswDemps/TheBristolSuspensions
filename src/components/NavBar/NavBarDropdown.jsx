import React, { useState } from "react";
import Arrow from "../Images/svg/arrow.svg";

import "./css/NavBar.css";

export const NavBarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  let isActive = isOpen ? " active" : " navbar-link-dropdown-inactive";

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={"navbar-link-dropdown" + isActive}>
      <button className={"navbar-link" + isActive} onClick={toggleIsOpen}>
        ABOUT <img src={Arrow} height="15px" width="15px" />
      </button>
      {isOpen && (
        <>
          <a href="/about" className="navbar-link-dropdown-item">
            <button className="navbar-link">ABOUT US</button>
          </a>
          <a href="/members" className="navbar-link-dropdown-item">
            <button className="navbar-link">MEMBERS</button>
          </a>
          <a href="/alumni" className="navbar-link-dropdown-item">
            <button className="navbar-link">ALUMNI</button>
          </a>
        </>
      )}
    </div>
  );
};
