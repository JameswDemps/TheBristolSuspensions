import React from "react";

import "./css/members.css";

import { MembersCollage } from "./MembersCollage";

export const Members = () => {
  return (
    <div className="members-background">
      <div className="members-content">
        <h1 className="members-header">Current Members</h1>
        <MembersCollage />
      </div>
    </div>
  );
};
