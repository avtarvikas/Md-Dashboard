import React, { Component } from "react";
import data from "../data.json";

class UserActivity extends Component {
  state = {
    showSetting: false
  };

  handleOpenWidget() {
    this.setState({
      showSetting: true
    });
  }

  componentDidMount(){
    let self = this;
    document.addEventListener('click',function(e){
      if(e.target.className != 'setting-icon' && e.target.className != 'widget-setting' && e.target.className != 'setting-options border-bottom' && e.target.className != 'setting-options'){
        self.setState({
          showSetting: false
        })
      }
    })
  }

  componentWillUnmount(){
    document.removeEventListener('click')
  }

  render() {
    const { text } = this.props;
    return (
      <div className=" card genericCard">
        <div className="widget-header">
          <span>Users activity{text}</span>
          <div className="setting">
            <span>Weekly</span>
            <i className="arrow-down-icon" />
            <i
              className="setting-icon"
              onClick={() => {
                this.handleOpenWidget();
              }}
            />
            {this.state.showSetting ? (
              <div className="widget-setting">
                <div className="setting-options border-bottom">Edit Widget</div>
                <div className="setting-options">Delete Widget</div>
              </div>
            ) : (
              ""
            )}
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
                <div style={{ float: "right", width: "55%" }}>
                  <div style={{ float: "right", fontSize: "15px" }}>
                    {barPercentage}
                  </div>
                  <div className="pr-bar-container">
                    <div className="pr-bar" style={{ width: barPercentage }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UserActivity;