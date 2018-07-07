import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App.js";
import DndDashboard from "./containers/DndDashboard"
// import Simple from "./Simple"

const RootRouter = () => (
  <BrowserRouter>
    <App>
      <div>
        <Switch>
          <Route exact path="/" component={DndDashboard} />
          {/* <Route exact path="/dnd" component={Simple} /> */}
        </Switch>
      </div>
    </App>
  </BrowserRouter>
);

export default RootRouter;
