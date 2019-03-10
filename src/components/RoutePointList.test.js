import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { createMount } from "@material-ui/core/test-utils";
import React from "react";
import RoutePointList from "./RoutePointList";
import RoutePointListItem from "./RoutePointListItem";

describe("RoutePointList", () => {
  let mount, routePoints, removeRoutePoint, sortEndHandler, component;

  beforeAll(() => {
    configure({ adapter: new Adapter() });
    mount = createMount();
  });

  beforeEach(() => {
    routePoints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => ({
      id: value,
      latitude: value / 100 + 55.75,
      longitude: value / 100 + 37.57,
      description: `Item ${value}`
    }));

    removeRoutePoint = jest.fn();
    sortEndHandler = jest.fn();

    component = mount(
      <RoutePointList
        routePoints={routePoints}
        removeRoutePoint={removeRoutePoint}
        onSortEnd={sortEndHandler}
      />
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it("Компонет создан. Им получены корректные свойства.", () => {
    expect(component).toBeTruthy();
    expect(component.props().routePoints).toBe(routePoints);
    expect(component.props().removeRoutePoint).toBe(removeRoutePoint);
    expect(component.props().onSortEnd).toBe(sortEndHandler);
  });

  it("Внутри компонента существует нужное кол-во RoutePointListItem, в которые проброшены корректные свойства.", () => {
    const routePointListItems = component.find(RoutePointListItem);
    expect(routePointListItems.length).toBe(10);
    routePointListItems.forEach((routePointListItem, i) => {
      expect(routePointListItem.props().id).toBe(routePoints[i].id);
      expect(routePointListItem.props().description).toBe(
        routePoints[i].description
      );
      expect(routePointListItem.props().removeRoutePoint).toBe(
        removeRoutePoint
      );
    });
  });
});
