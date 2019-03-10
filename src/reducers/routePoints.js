import {
  ADD_ROUTE_POINT,
  MOVE_ROUTE_POINT,
  REMOVE_ROUTE_POINT,
  REORDER_ROUTE_POINTS
} from "../actions/actionTypes";
import { arrayMove } from "react-sortable-hoc";

const routePoints = (
  state = [],
  { type, id, latitude, longitude, description, oldIndex, newIndex }
) => {
  switch (type) {
    case ADD_ROUTE_POINT:
      return [
        ...state,
        {
          id: id,
          latitude: latitude,
          longitude: longitude,
          description: description
        }
      ];

    case REMOVE_ROUTE_POINT:
      return [...state].filter(task => task.id !== id);

    case MOVE_ROUTE_POINT:
      return [...state].map(routePoint =>
        routePoint.id === id
          ? { ...routePoint, latitude: latitude, longitude: longitude }
          : routePoint
      );

    case REORDER_ROUTE_POINTS:
      return arrayMove(state, oldIndex, newIndex);

    default:
      return state;
  }
};

export default routePoints;
