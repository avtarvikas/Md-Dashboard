import React, { Component } from "react";

import Card from "./Card";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import update from "react/lib/update";

class Container extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.state = {
      cards: [
        {
          id: 1,
          text: "library"
        },
        {
          id: 2,
          text: " enough"
        },
        {
          id: 3,
          text: "README"
        },
        {
          id: 4,
          text: "Create some examples"
        }
      ]
    };
  }

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

  render() {
    const { cards } = this.state;

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
                <i className="fa fa-pencil paa" />
                <h6
                  style={{
                    textAlign: "right",
                    display: "inline",
                    padding: "5px",
                    fontWeight: "500"
                  }}
                >
                  CUSTOMIZE
                </h6>
              </div>
            </div>
            <div className="row m0">
              {cards.map((card, i) => (
                <Card
                  key={card.id}
                  index={i}
                  id={card.id}
                  text={card.text}
                  moveCard={this.moveCard}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);
