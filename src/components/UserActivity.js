/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import { Card, CardBody, Fa } from "mdbreact";
// import Arrow from "-!Arrowdown-icon-default-!./Arrowdown-icon-default.svg"

const UserActivity = () => {
  return (
    <Card className="genericCard">
      <div className="widget-header">
        <span>Users Activity</span>
        {/* <span><img src={arrowDown}/></span> */}\
        {/* <Arrow/> */}
      </div>

      <CardBody className="border-bottom">
        <h2 className="genericCardHTag"> ID : 124874511451 </h2>
      </CardBody>
    </Card>
  );
};

export default UserActivity;
