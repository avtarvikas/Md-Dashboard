import React, { Component } from "react";
import Dashboard from "./containers/Dashboard"

class App extends Component {
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
        <div>
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
