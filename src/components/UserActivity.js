import React from "react";
import { Card, CardBody, Fa } from "mdbreact";
import data from "../data.json";
import LinearProgress from "material-ui/LinearProgress";

const UserActivity = () => {
  console.log(data);

  return (
    <Card className="genericCard">
      <div className="widget-header">
        <span>Users activity</span>
        <div className="setting">
          <span>Weekly</span>
          <i className="arrow-down-icon" />
          <i className="setting-icon" />
        </div>
      </div>
      <div className="widget-body">
        {Object.keys(data.weekly).map((element, i) => {
          const user = data.users.filter(user => user.id === element);

          if (user.length === 0) return;
          const barPercentage = parseInt(data.weekly[element]) + "%";
          return (
            <div key={i} className="user-content">
              <span
                className="user-avtar"
                style={{
                  backgroundImage: `url(${require("../assets/" +
                    user[0].image)})`
                }}
              >
                {user[0].name} {user[0].lastname}
              </span>
              <div style={{float:"right", width:"55%"}}>
                <div style={{float:"right", fontSize:"15px"}}>{barPercentage}</div>
                <div className="pr-bar-container">
                  <div className="pr-bar" style={{ width: barPercentage }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default UserActivity;
