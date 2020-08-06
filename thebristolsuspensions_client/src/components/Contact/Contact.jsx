import React from "react";

import "./css/contact.css";
import Image from "react-image-webp";

import { strings } from "./strings";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-banner contact-banner-heading-background">
        <div className="contact-banner-overlay">
          <h1 className="contact-header">{strings.CONTACT_HEADING}</h1>
        </div>
      </div>
      <div className="contact-text-container">
        <div className="contact-text">
          {strings.CONTACT_TEXT.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
