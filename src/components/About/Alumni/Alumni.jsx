import React from "react";

import "./css/alumni.css";

import { AlumniTable } from "./AlumniTable";

export const Alumni = () => {
  return (
    <div className="members-background">
      <div className="members-content">
        <h1 className="members-header">Alumni</h1>
        <AlumniTable />
      </div>
    </div>
  );
};
