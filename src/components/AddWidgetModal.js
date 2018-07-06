import React from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import image from "../assets/users activity widget picture.png";
import removeWidget from "../assets/Removewidget - icon.svg";

const AddWidgetModal = ({ data, selectWidget, handleAddWidget }) => {
  return (
    <div className="content" style={{ height: "300px", width: "100%" }}>
      <div style={{ width: "100%", height: "100%" }}>
        <div
          className="side-bar"
          style={{
            float: "left",
            width: "25%",
            height: "100%",
            borderRight: "1px solid gray",
            background: "#dddbdb"
          }}
        >
          <input
            placeholder="Search"
            style={{
              width: "92%",
              margin: "5px",
              borderRadius: "5px",
              outline: "none",
              padding: "5px"
            }}
          />
          <ul style={{ listStyle: "none", paddingLeft: "3%" }}>
            <li
              style={{
                padding: "7px",
                marginLeft: "-5px",
                cursor: "pointer",
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
                padding: "7px",
                marginLeft: "-5px",
                cursor: "pointer",
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
        <div className="body" style={{ float: "right", width: "75%" }}>
          <div
            className="row"
            style={{
              margin: "0px",
              border: "1px solid #cecaca",
              padding: "20px",
              height: "142px"
            }}
          >
            <div className="image-content" style={{ width: "20%" }}>
              <img src={image} style={{ height: "100%", width: "100%" }} />
            </div>
            <div
              className="description"
              style={{ width: "60%", margin: "0px 5px 0px 5px" }}
            >
              <label style={{ fontWeight: "900", marginBottom: "0px" }}>
                User Worked More than required
              </label>
              <div>
                User who worked more or lessthan their minimum hours required in
                daily, weekly and monthly.
              </div>
              <div>
                <label style={{ fontWeight: "600", color: "#82b2ed" }}>
                  Variables:
                </label>
                <span
                  style={{
                    padding: "2px",
                    fontSize: "12px",
                    background: "#cde1f4",
                    borderRadius: "5px",
                    margin: "10px"
                  }}
                >
                  USERS
                </span>
                <span
                  style={{
                    padding: "2px",
                    fontSize: "12px",
                    background: "#cde1f4",
                    borderRadius: "5px"
                  }}
                >
                  WEBSITES
                </span>
              </div>
            </div>
            <div className="action-button" style={{ alignSelf: "center" }}>
              <button
                className="btn primary"
                style={{
                  textAlign: "right",
                  display: "inline",
                  padding: "5px",
                  fontWeight: "500"
                }}
                onClick={()=> handleAddWidget("UserActivity")}
              >
                <span style={{ fontSize: "17px" }}>+</span> &nbsp; Add Widget
              </button>
              {/* <button
                style={{
                  background: "red",
                  border: "none",
                  borderRadius: "4px",
                  color: "#ffffff",
                  cursor: "pointer"
                }}
              >
                <i className="fa fa-trash" aria-hidden="true" />Remove Widget
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
