import { setWidgetData } from "./widgetData";

export const setCardData = (data) => dispatch => {
  dispatch(setWidgetData(data))
}
