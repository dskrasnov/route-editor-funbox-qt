import {
  ADD_ROUTE_POINT,
  MOVE_ROUTE_POINT,
  REMOVE_ROUTE_POINT,
  REORDER_ROUTE_POINTS
} from "./actionTypes";

export const addRoutePoint = (id, latitude, longitude, description) => ({
  type: ADD_ROUTE_POINT,
  id,
  latitude,
  longitude,
  description
});

export const removeRoutePoint = id => ({
  type: REMOVE_ROUTE_POINT,
  id
});

export const moveRoutePoint = (id, latitude, longitude) => ({
  type: MOVE_ROUTE_POINT,
  id,
  latitude,
  longitude
});

export const reorderRoutePoints = (oldIndex, newIndex) => ({
  type: REORDER_ROUTE_POINTS,
  oldIndex,
  newIndex
});
