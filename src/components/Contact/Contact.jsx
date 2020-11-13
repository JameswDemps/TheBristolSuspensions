import React from "react";

import "./css/contact.css";
import Image from "react-image-webp";

import { strings } from "./strings";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-banner">
          <h1 className="contact-header">{strings.CONTACT_HEADING}</h1>
        </div>
        <div className="contact-text">
          {strings.CONTACT_TEXT.map((item) => (
            <p>{item}</p>
          ))}
          <form className="contact-form">
            <input placeholder="Name *" />
            <input placeholder="Email *" />
            <input placeholder="Subject" />
            <textarea placeholder="Message *" />
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
