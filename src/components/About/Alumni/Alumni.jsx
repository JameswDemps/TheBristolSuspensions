import React from "react";

import "./css/alumni.css";

import { AlumniTable } from "./AlumniTable";

export const Alumni = () => {
  return (
    <div className="alumni-background">
      <div className="alumni-content">
        <h1 className="alumni-header">Alumni</h1>
        <AlumniTable />
      </div>
    </div>
  );
};
