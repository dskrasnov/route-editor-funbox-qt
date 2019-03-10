import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
import React from "react";
import MapArea from "./MapArea";

describe("MapArea", () => {
  let mapCenter, routePoints, changeMapCenter, moveRoutePoint, component;

  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  beforeEach(() => {
    mapCenter = { latitude: 55.753575, longitude: 37.62104 };

    routePoints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => ({
      id: value,
      latitude: value / 100 + 55.75,
      longitude: value / 100 + 37.57,
      description: `Item ${value}`
    }));

    changeMapCenter = jest.fn();
    moveRoutePoint = jest.fn();

    component = mount(
      <MapArea
        mapCenter={mapCenter}
        routePoints={routePoints}
        changeMapCenter={changeMapCenter}
        moveRoutePoint={moveRoutePoint}
      />
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it("Компонет создан. Им получены корректные свойства.", () => {
    expect(component).toBeTruthy();
    expect(component.props().mapCenter).toBe(mapCenter);
    expect(component.props().routePoints).toBe(routePoints);
    expect(component.props().changeMapCenter).toBe(changeMapCenter);
    expect(component.props().moveRoutePoint).toBe(moveRoutePoint);
  });
});
