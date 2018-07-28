import React from "react";

const Sidebar = ({ data, selectWidget }) => {
  return (
    <div className="side-bar">
      <input placeholder="Search" />
      <ul>
        <li
          style={{
            background: data.selectedWidget == 1 ? "#ffffff" : ""
          }}
          onClick={() => {
            selectWidget(1);
          }}
        >
          <i
            className="fa fa-address-card"
            aria-hidden="true"
            style={{ marginRight: "5px" }}
          />Widget Directory
        </li>
        <li
          style={{
            background: data.selectedWidget == 2 ? "#ffffff" : ""
          }}
          onClick={() => {
            selectWidget(2);
          }}
        >
          <i
            className="fa fa-user"
            aria-hidden="true"
            style={{ marginRight: "5px" }}
          />My Widget
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
