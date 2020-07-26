import React, { useState } from "react";

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
        ABOUT
      </button>
      {isOpen && (
        <>
          <button className="navbar-link navbar-link-dropdown-item">
            ABOUT US
          </button>
          <button className="navbar-link navbar-link-dropdown-item">
            MEMBERS
          </button>
          <button className="navbar-link navbar-link-dropdown-item">
            ALUMNI
          </button>
        </>
      )}
    </div>
  );
};
