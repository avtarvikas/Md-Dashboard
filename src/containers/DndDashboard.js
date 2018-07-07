import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCardData } from "../actions";
import Card from "../components/Card";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import update from "react/lib/update";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dialog from "material-ui/Dialog";
import AddWidgetModal from "../components/AddWidgetModal";
import { data } from "../constants";
import _ from "underscore";

class DndDashboard extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.state = {
      open: false,
      selectedWidget: 1,
      cards: [],
      currentCards: []
    };
  }

  componentWillMount() {
    this.props.setCardData(data);
  }

  componentWillReceiveProps(props) {
    this.setState({
      cards: props.data
    });
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
    let { cards, currentCards } = this.state;
    if (!_.contains(currentCards, val)) {
      currentCards.push(val);
    }
    cards[0].widgetId = val;
    this.setState(
      {
        currentCards
      },
      () => this.props.setCardData(cards)
    );
  };

  handleDeleteWidget = (val, widgetId) => {
    let { cards, currentCards } = this.state;
    currentCards = currentCards.filter(card => card !== widgetId);
    cards[val].widgetId = "none";
    this.setState(
      {
        currentCards
      },
      () => this.props.setCardData(cards)
    );
  };

  handleDeleteByWidgetModal = val => {
    let { cards, currentCards } = this.state;
    currentCards = currentCards.filter(card => card !== val);
    cards = cards.map(state => {
      if (state.widgetId === val) {
        state.widgetId = "none";
        return state;
      }
      return state;
    });
    this.setState(
      {
        currentCards
      },
      () => this.props.setCardData(cards)
    );
  };

  render() {
    const { cards } = this.state;
    console.log(this.props);

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
                  padding: "8px 16px",
                  fontSize: "16px",
                  background: "#e5e6e7",
                  color: "#07162e",
                  fontWeight: "500",
                  borderBottom: "1px solid #a9b7cf"
                }}
                bodyStyle={{ padding: "0px" }}
                style={{ width: "100%" }}
                contentStyle={{ width: "75%", maxWidth: "1200px" }}
              >
                <AddWidgetModal
                  data={this.state}
                  selectWidget={this.selectWidget}
                  handleAddWidget={this.handleAddWidget}
                  handleDeleteByWidgetModal={this.handleDeleteByWidgetModal}
                  onCloseModal={this.onCloseModal}
                />
              </Dialog>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const stateToProps = state => {
  return {
    data: state.widgetData.cards
  };
};

export default withRouter(
  connect(
    stateToProps,
    { setCardData }
  )(DragDropContext(HTML5Backend)(DndDashboard))
);
