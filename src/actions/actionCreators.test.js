import {
  ADD_ROUTE_POINT,
  MOVE_ROUTE_POINT,
  REMOVE_ROUTE_POINT,
  REORDER_ROUTE_POINTS
} from "./actionTypes";
import {
  addRoutePoint,
  moveRoutePoint,
  removeRoutePoint,
  reorderRoutePoints
} from "./actionCreators";

describe("actionCreators", () => {
  it("addRoutePoint", () => {
    const expectedAction = {
      type: ADD_ROUTE_POINT,
      id: 1,
      latitude: 2,
      longitude: 3,
      description: "TEST STRING"
    };
    expect(addRoutePoint(1, 2, 3, "TEST STRING")).toEqual(expectedAction);
  });

  it("removeRoutePoint", () => {
    const expectedAction = {
      type: REMOVE_ROUTE_POINT,
      id: 1
    };
    expect(removeRoutePoint(1)).toEqual(expectedAction);
  });

  it("moveRoutePoint", () => {
    const expectedAction = {
      type: MOVE_ROUTE_POINT,
      id: 1,
      latitude: 2,
      longitude: 3
    };
    expect(moveRoutePoint(1, 2, 3)).toEqual(expectedAction);
  });

  it("reorderRoutePoints", () => {
    const expectedAction = {
      type: REORDER_ROUTE_POINTS,
      oldIndex: 1,
      newIndex: 2
    };
    expect(reorderRoutePoints(1, 2)).toEqual(expectedAction);
  });
});
