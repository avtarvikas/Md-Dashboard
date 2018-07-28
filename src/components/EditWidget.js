import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCardData } from "../actions";
import data from "../data.json";
import cancleButton from "../assets/cancelbutton - web - default.svg";
import saveButton from "../assets/savebutton - web - default.svg";

class EditWidget extends Component {
  state = {
    noOfUser: "",
    activity: null
  };

  render() {
    console.log(this.state);

    const {
      handleDeleteWidget,
      index,
      widgetId,
      onCloseModal,
      onSaveChanges
    } = this.props;
    return (
      <div className=" card genericCard">
        <div className="widget-header">
          <span>Top Highest percentage of Mobile Time Users</span>
        </div>
        <div className="widget-body">
          <div className="form-group">
            <label>Number of Users</label>
            <input
              type="number"
              name="noOfUser"
              value={this.state.noOfUser}
              onChange={e => this.setState({ noOfUser: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Activity</label>
            <input
              type="radio"
              id="activity"
              name="activity"
              value="Highest"
              onClick={e => this.setState({ activity: e.target.value })}
            />
            <span>Highest</span>
            <input
              type="radio"
              id="activity"
              name="activity"
              value="Lowest"
              onClick={e => this.setState({ activity: e.target.value })}
            />
            <span>Lowest</span>
          </div>
          <div className="edit-widget-action-button">
            <img
              alt=""
              src={cancleButton}
              style={{ marginRight: "10px" }}
              onClick={() => {
                onCloseModal();
              }}
            />
            <img
              alt=""
              src={saveButton}
              onClick={() => {
                onSaveChanges(this.state);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { setCardData }
  )(EditWidget)
);
