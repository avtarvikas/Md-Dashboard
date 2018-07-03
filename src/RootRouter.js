import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App.js";
import Dashboard from "./containers/Dashboard"

const RootRouter = () => (
  <BrowserRouter>
    <App>
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          {/* <Route exact path="/mycart" component={Cart} /> */}
        </Switch>
      </div>
    </App>
  </BrowserRouter>
);

export default RootRouter;
