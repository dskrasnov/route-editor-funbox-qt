import routePoints from "./routePoints";
import {
  addRoutePoint,
  moveRoutePoint,
  removeRoutePoint,
  reorderRoutePoints
} from "../actions/actionCreators";

describe("routePoints", () => {
  it("Необрабатываемое действие", () => {
    const state = [
      {
        id: 1,
        latitude: 2,
        longitude: 3,
        description: "TEST STRING"
      }
    ];
    const expectedState = [
      {
        id: 1,
        latitude: 2,
        longitude: 3,
        description: "TEST STRING"
      }
    ];
    expect(routePoints(state, { type: "Bla-bla..." })).toEqual(expectedState);
  });

  it("addRoutePoint", () => {
    const expectedState = [
      {
        id: 1,
        latitude: 2,
        longitude: 3,
        description: "TEST STRING"
      }
    ];
    expect(routePoints([], addRoutePoint(1, 2, 3, "TEST STRING"))).toEqual(
      expectedState
    );
  });

  it("removeRoutePoint", () => {
    const state = [
      {
        id: 1,
        latitude: 2,
        longitude: 3,
        description: "TEST STRING ONE"
      },
      {
        id: 4,
        latitude: 5,
        longitude: 6,
        description: "TEST STRING TWO"
      }
    ];
    const resultState = routePoints(state, removeRoutePoint(1));
    const expectedState = [
      {
        id: 4,
        latitude: 5,
        longitude: 6,
        description: "TEST STRING TWO"
      }
    ];
    expect(resultState).toEqual(expectedState);
  });

  it("moveRoutePoint", () => {
    const state = [
      {
        id: 1,
        latitude: 2,
        longitude: 3,
        description: "TEST STRING ONE"
      },
      {
        id: 4,
        latitude: 5,
        longitude: 6,
        description: "TEST STRING TWO"
      }
    ];
    const resultState = routePoints(state, moveRoutePoint(4, 7, 8));
    const expectedState = [
      {
        id: 1,
        latitude: 2,
        longitude: 3,
        description: "TEST STRING ONE"
      },
      {
        id: 4,
        latitude: 7,
        longitude: 8,
        description: "TEST STRING TWO"
      }
    ];
    expect(resultState).toEqual(expectedState);
  });

  it("reorderRoutePoints", () => {
    const state = [
      {
        id: 1,
        latitude: 2,
        longitude: 3,
        description: "TEST STRING ONE"
      },
      {
        id: 4,
        latitude: 5,
        longitude: 6,
        description: "TEST STRING TWO"
      },
      {
        id: 7,
        latitude: 8,
        longitude: 9,
        description: "TEST STRING THREE"
      }
    ];
    const resultState = routePoints(state, reorderRoutePoints(0, 2));
    const expectedState = [
      {
        id: 4,
        latitude: 5,
        longitude: 6,
        description: "TEST STRING TWO"
      },
      {
        id: 7,
        latitude: 8,
        longitude: 9,
        description: "TEST STRING THREE"
      },
      {
        id: 1,
        latitude: 2,
        longitude: 3,
        description: "TEST STRING ONE"
      }
    ];
    expect(resultState).toEqual(expectedState);
  });
});
