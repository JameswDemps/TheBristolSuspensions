import React from "react";

import "./css/Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-heading-text">Follow Us</div>
      <div className="footer-icons-container">
        <div className="footer-icons">
          <a
            href="https://www.facebook.com/thebristolsuspensions/"
            className="footer-icon"
          >
            <img
              className="footer-icon-img"
              src={require("../Images/Facebook-Footer-Icon.png")}
            ></img>
          </a>
          <a href="https://twitter.com/brisuspensions" className="footer-icon">
            <img
              className="footer-icon-img"
              src={require("../Images/Twitter-Footer-Icon.png")}
            ></img>
          </a>
          <a
            href="https://www.instagram.com/brisuspensions/"
            className="footer-icon"
          >
            <img
              className="footer-icon-img"
              src={require("../Images/Instagram-Footer-Icon.png")}
            ></img>
          </a>
          <a
            href="https://soundcloud.com/user-914962576"
            className="footer-icon"
          >
            <img
              className="footer-icon-img"
              src={require("../Images/SoundCloud-Footer-Icon.png")}
            ></img>
          </a>
          <a
            href="https://www.snapchat.com/add/brisuspensions"
            className="footer-icon"
          >
            <img
              className="footer-icon-img"
              src={require("../Images/SnapChat-Footer-Icon.png")}
            ></img>
          </a>
          <a
            href="https://www.youtube.com/channel/UC64I7Ne7m-ddyCvNxcdfwKw/"
            className="footer-icon"
          >
            <img
              className="footer-icon-img"
              src={require("../Images/YouTube-Footer-Icon.png")}
            ></img>
          </a>
        </div>
      </div>
      <div className="footer-trademark">© 2017 The Bristol Suspensions</div>
    </div>
  );
};
