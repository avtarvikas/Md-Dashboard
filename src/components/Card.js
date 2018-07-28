import { DragSource, DropTarget } from "react-dnd";
import React, { Component } from "react";
import ItemTypes from "./ItemTypes";
import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";
import flow from "lodash/flow";
import UserActivity from "./UserActivity";
import EditWidget from "./EditWidget";

const style = {
  // border: "1px dashed gray",
  padding: "0px",
  margin: " 16px 10px 10px 16px",
  backgroundColor: "white",
  cursor: "move",
  borderRadius: "5px"
};

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    console.log(hoverBoundingRect);

    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    const clientOffset = monitor.getClientOffset();

    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    props.moveCard(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  }
};

class Card extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    moveCard: PropTypes.func.isRequired
  };
  state = {
    isEdit: false,
    noOfUser: 5,
    activity: null
  };

  onSaveChanges = ({ noOfUser, activity }) => {
    this.setState({
      noOfUser,
      activity,
      isEdit: false
    });
  };

  render() {
    const {
      widgetId,
      isDragging,
      connectDragSource,
      connectDropTarget
    } = this.props;
    const opacity = isDragging ? 0.3 : 1;

    return connectDropTarget(
      <div className="col-md-4" style={{ padding: "0px" }}>
        {widgetId !== "none" ? (
          connectDragSource(
            <div style={{ ...style, opacity }}>
              {this.state.isEdit ? (
                <EditWidget
                  onCloseModal={() => this.setState({ isEdit: false })}
                  onSaveChanges={this.onSaveChanges}
                />
              ) : (
                <UserActivity
                  {...this.props}
                  filterData={this.state}
                  onEditHandler={() =>
                    this.setState({
                      isEdit: true
                    })
                  }
                />
              )}
            </div>
          )
        ) : (
          <div className="move-here">
            <span>Drop Here</span>
          </div>
        )}
      </div>
    );
  }
}

export default flow([
  DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })),
  DropTarget(ItemTypes.CARD, cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
])(Card);
