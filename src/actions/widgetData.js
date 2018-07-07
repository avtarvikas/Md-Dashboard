export const SET_WIDGET_DATA = "SET_WIDGET_DATA";

const initialState = {
  cards: []
};

const widgetData = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_WIDGET_DATA:
      return {
        ...state,
        cards: data
      };
    default:
      return state;
  }
};

export default widgetData;

/** Action Creators */

export const setWidgetData = data => ({
  type: SET_WIDGET_DATA,
  data
});
