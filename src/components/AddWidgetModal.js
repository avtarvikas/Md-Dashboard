import React from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import image from "../assets/users activity widget picture.png";
import removeWidget from "../assets/Removewidget - icon.svg";
import cancleButton from "../assets/cancelbutton - web - default.svg";
import saveButton from "../assets/savebutton - web - default.svg";
import _ from "underscore";

const AddWidgetModal = ({
  data,
  selectWidget,
  handleAddWidget,
  handleDeleteByWidgetModal,
  onCloseModal
}) => {
  return (
    <div className="content" style={{ height: "300px", width: "100%" }}>
      <div style={{ width: "100%", height: "100%" }}>
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
        <div className="add-widget-body">
          <div className="row add-widget-body-content">
            <div className="image-content col-md-3">
              <img src={image} />
            </div>
            <div className="description col-md-6 p0 m0">
              <label className="description-header">
                User Worked More than required
              </label>
              <div className="description-content">
                User who worked more or lessthan their minimum hours required in
                daily, weekly and monthly.
              </div>
              <div className="tags">
                <label>Variables:</label>
                <span>USERS</span>
                <span>WEBSITES</span>
              </div>
            </div>
            <div
              className="action-button col-md-3"
              style={{ alignSelf: "center" }}
            >
              {_.contains(data.currentCards, "UserActivity") ? (
                <button
                  className="remove-btn"
                  onClick={() => handleDeleteByWidgetModal("UserActivity")}
                >
                  <i
                    className="fa fa-trash"
                    aria-hidden="true"
                    style={{ fontSize: "20px", paddingRight: "7px" }}
                  />
                  <span>Remove Widget</span>
                </button>
              ) : (
                <button
                  className="btn primary"
                  onClick={() => handleAddWidget("UserActivity")}
                >
                  <span style={{ fontSize: "17px" }}>+</span> &nbsp; Add Widget
                </button>
              )}
            </div>
          </div>
          <div className="widget-action-button">
            <img
              src={cancleButton}
              style={{ marginRight: "10px" }}
              onClick={() => {
                onCloseModal();
              }}
            />
            <img
              src={saveButton}
              onClick={() => {
                onCloseModal();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
