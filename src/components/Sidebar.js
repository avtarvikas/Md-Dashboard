import React from "react";
import { Fa } from "mdbreact";

const Sidebar = () => {
  return (
    <div className="col-2 sidebar" style={{ padding: "0px" }}>
      <div>
        <div className="header" style={{marginBottom:"10px"}}>
          <h4 style={{ color: "#746f6f" }}>
            <Fa icon="home" /> Home
          </h4>
        </div>
        <div className="sidebar-action">
          <Fa icon="dashboard" />
          <span> Dashboard</span>
        </div>
        <div className="sidebar-action">
          <Fa icon="th-list" />
          <span> Activity</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
