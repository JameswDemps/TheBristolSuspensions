import React from "react";

import "./css/members.css";

import { memberInfo } from "./memberInfo";

export const MembersCollage = () => {
  return (
    <div className="members-container">
      {memberInfo.map((item) => (
        <div className="members-member">
          <div className="members-image-container">
            <img
              className="members-image"
              src={require(`../../Images/Members/${item.IMAGE_NAME}`)}
            />
          </div>
          <p className="members-text">{`${item.NAME} - ${item.PART}`}</p>
        </div>
      ))}
    </div>
  );
};
