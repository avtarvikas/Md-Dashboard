import { DragSource, DropTarget } from "react-dnd";
import React, { Component } from "react";

import ItemTypes from "./ItemTypes";
import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";
import flow from "lodash/flow";
import UserActivity from "./UserActivity";

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

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    console.log(hoverBoundingRect);
    

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    
    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveCard(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
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

  render() {
    const {
      widgetId,
      isDragging,
      connectDragSource,
      connectDropTarget
    } = this.props;
    const opacity = isDragging ? 0.3 : 1;
    console.log(this.props);

    return connectDropTarget(
      <div className="col-md-4" style={{ padding: "0px" }}>
        {widgetId !== "none" ? (
          connectDragSource(
            <div style={{ ...style, opacity }}>
              <UserActivity {...this.props}/>
            </div>
          )
        ) : (
          <div
            style={{
              height: "260px",
              padding: "0px",
              margin: "16px 10px 10px 16px",
              borderRadius: "0.25rem",
              border: "1px dashed #8197bc",
              textAling: "center"
            }}
          >
            <span className="move-here">Drop Here</span>
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
