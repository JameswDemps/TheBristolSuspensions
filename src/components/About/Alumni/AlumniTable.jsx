import React from "react";
import ReactCollapsingTable from "react-collapsing-table";

import "./css/alumni.css";

import { alumniInfo } from "./alumniInfo";

const rows = [];
for (let i = 0; i < alumniInfo.length; i++) {
  rows.push({ ...alumniInfo[i], id: i });
}

const columns = [
  {
    accessor: "NAME",
    label: "Name",
    priorityLevel: 1,
    position: 1,
    minWidth: 150,
  },
  {
    accessor: "YEAR_JOINED",
    label: "Year Joined",
    priorityLevel: 2,
    position: 2,
    minWidth: 150,
  },
  {
    accessor: "YEAR_LEFT",
    label: "Year Left",
    priorityLevel: 2,
    position: 3,
    minWidth: 150,
  },
  {
    accessor: "VOICE_PART",
    label: "Voice Part",
    priorityLevel: 2,
    position: 4,
    minWidth: 150,
  },
  {
    accessor: "COURSE",
    label: "Course",
    priorityLevel: 2,
    position: 5,
    minWidth: 150,
  },
  {
    accessor: "POSITION",
    label: "Position",
    priorityLevel: 2,
    position: 6,
    minWidth: 150,
  },
];

export const AlumniTable = () => {
  return (
    // <div className="members-container">
    <ReactCollapsingTable
      rowSize={alumniInfo.length}
      rows={rows}
      columns={columns}
    />
    // </div>
  );
};
