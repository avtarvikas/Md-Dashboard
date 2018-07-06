import React, { Component } from "react";

import Card from "./Card";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import update from "react/lib/update";
import LinearProgress from "material-ui/LinearProgress";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import image from "../assets/users activity widget picture.png";
import cancleButton from "../assets/cancelbutton - web - default.svg";
import saveButton from "../assets/savebutton - web - default.svg";
import removeWidget from "../assets/Removewidget - icon.svg";
import AddWidgetModal from "../components/AddWidgetModal";
import { data } from "../constants";

class Container extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.state = {
      open: false,
      selectedWidget: 1,
      cards: data
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  selectWidget = value => {
    this.setState({
      selectedWidget: value
    });
  };

  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        }
      })
    );
  }

  handleAddWidget = val => {
    let currentState = this.state.cards;
    currentState[0].widgetId = val;
    this.setState({
      cards: currentState,
      open: false
    });
  };

  handleDeleteWidget = val => {
    let currentState = this.state.cards;
    currentState[val].widgetId = 'none';
    this.setState({
      cards: currentState
    });
  };

  render() {
    const { cards } = this.state;
    const actions = [
      <img src={cancleButton} style={{ marginRight: "10px" }} />,
      <img src={saveButton} />
    ];
    return (
      <MuiThemeProvider>
        <div className="flex-container">
          <div className="content row" style={{ margin: "0px" }}>
            <div className="col-12" style={{ padding: "0px" }}>
              <div className="dnd-header row">
                <div className="col-md-9 pt-10">
                  <h4 style={{ display: "inline" }}>Team Dashboard</h4>
                </div>
                <div className="col-md-3">
                  <div
                    style={{ display: "inline", float: "right" }}
                    className="customise-icon"
                  >
                    <button
                      className="btn primary"
                      style={{
                        textAlign: "right",
                        display: "inline",
                        padding: "5px",
                        fontWeight: "500"
                      }}
                      onClick={this.onOpenModal}
                    >
                      <span style={{ fontSize: "17px" }}>+</span> &nbsp; Add
                      Widget
                    </button>
                  </div>
                </div>
              </div>
              <div className="row m0">
                {cards.map((card, i) => (
                  <Card
                    key={card.id}
                    index={i}
                    id={card.id}
                    widgetId={card.widgetId}
                    moveCard={this.moveCard}
                    handleDeleteWidget={this.handleDeleteWidget}
                  />
                ))}
              </div>
              <Dialog
                title="Add a widget"
                modal={false}
                open={this.state.open}
                onRequestClose={this.onCloseModal}
                titleStyle={{
                  padding: "6px",
                  fontSize: "16px",
                  background: "#efeaea"
                }}
                bodyStyle={{ padding: "0px" }}
                style={{ width: "100%" }}
                contentStyle={{ width: "84%", maxWidth: "1200px" }}
              >
                <AddWidgetModal
                  data={this.state}
                  selectWidget={this.selectWidget}
                  handleAddWidget={this.handleAddWidget}
                />
              </Dialog>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);
