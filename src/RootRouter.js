import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App.js";
import DndDashboard from "./containers/DndDashboard"
import Dnd from "./containers/DND"

const RootRouter = () => (
  <BrowserRouter>
    <App>
      <div>
        <Switch>
          <Route exact path="/" component={DndDashboard} />
          <Route exact path="/dnd" component={Dnd} />
        </Switch>
      </div>
    </App>
  </BrowserRouter>
);

export default RootRouter;
