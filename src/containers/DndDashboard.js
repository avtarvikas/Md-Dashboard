import React, { Component } from "react";
import { Card, CardBody, Fa } from "mdbreact";
import { Line } from "react-chartjs-2";
import { Container } from "mdbreact";
import { data, dataLine2 } from "../constants";
import { Header, Sidebar, UserActivity } from "../components";

const widget = [
  { id: 1, name: UserActivity },
  { id: 2, name: UserActivity },
  { id: 3, name: UserActivity },
  { id: 4, name: UserActivity }
];

class DndDashboard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      collapse: false
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="flex-container">
        <div className="content row" style={{ margin: "0px" }}>
          <div className="col-12" style={{ padding: "0px" }}>
            <div className="header">
              <h4 style={{ display: "inline" }}>Team Dashboard</h4>
              <div
                style={{ display: "inline", float: "right" }}
                className="customise-icon"
              >
                <Fa icon="pencil" className="paa" />
                <h6
                  style={{
                    textAlign: "right",
                    display: "inline",
                    padding: "5px",
                    float: "right",
                    fontWeight: "500"
                  }}
                >
                  CUSTOMIZE
                </h6>
              </div>
            </div>
            <div className="row m0">
              {widget.map(obj => (
                <div className="col-4 p0" key={obj.id}>
                  <UserActivity />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DndDashboard;
